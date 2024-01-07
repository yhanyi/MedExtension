const GPT_TURBO_API_KEY = "<YOUR API KEY>";

// Function to process selected text using ChatGPT with a custom prompt
const processGPT = async (selectedText) => {
  const maxRetries = 3;
  let retries = 0;
  const customPrompt = `Summarize "${selectedText}" within 5 words in layman terms.`;

  const fetchWithRetries = async () => {
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + GPT_TURBO_API_KEY,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              { role: "system", content: "You are a helpful assistant." },
              { role: "user", content: selectedText },
              { role: "assistant", content: customPrompt }, // Add this line for a custom prompt
            ],
          }),
        }
      );

      if (!response.ok) {
        if (response.status === 429 && retries < maxRetries) {
          // Retry after a delay (exponential backoff)
          const delay = Math.pow(2, retries) * 1000;
          await new Promise((resolve) => setTimeout(resolve, delay));
          retries++;
          return fetchWithRetries();
        } else {
          throw new Error(`Request failed with status ${response.status}`);
        }
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw new Error("Error fetching data");
    }
  };

  return fetchWithRetries();
};

const createTooltip = (processedText, range) => {
  console.log("Creating tooltip");

  if (range) {
    const rect = range.getBoundingClientRect();
    // Create the tooltip
    const tooltip = document.createElement("div");
    tooltip.textContent = processedText;
    tooltip.style.position = "absolute";
    tooltip.style.left = rect.left + window.pageXOffset + "px";
    tooltip.style.top = rect.top + window.pageYOffset - rect.height - 5 + "px"; // Adjust as needed

    // Apply inline styles directly
    tooltip.style.backgroundColor = "#333";
    tooltip.style.color = "#fff";
    tooltip.style.padding = "5px";
    tooltip.style.borderRadius = "5px";
    tooltip.style.fontSize = "12px";
    tooltip.style.zIndex = "9999";

    document.body.appendChild(tooltip);

    setTimeout(() => {
      document.body.removeChild(tooltip);
    }, 10000);
  }
};

document.addEventListener("keydown", async function (event) {
  // Check if the Ctrl, Alt, and T keys are pressed
  if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === "x") {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    const range = selection.getRangeAt(0);
    if (selectedText) {
      try {
        const processedText = await processGPT(selectedText);
        console.log(processedText);
        createTooltip(processedText, range);
      } catch (error) {
        console.error("Error processing text:", error);
      }
    }
  }
});
