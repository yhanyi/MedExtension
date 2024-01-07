# Med-Ext

🩺 A simple Chrome extension built as a draft prototype for NUS YLLSoM's Health Hack 2024. This chrome extension sends a highlighted snippet of text and requests ChatGPT's Turbo-3.5 model to summarise a medical term into within 5 words. The prompt used is "Summarize [medical term] within 5 words in layman terms". The goal is to make less accessible medical nomenclature more accessible and understandable to the public in case the doctor does not go through them. (Not because I don't have enough money to generate longer outputs of text. 😔)

The team consists of:

- Hong Ruey
- Jia Yang
- Marcus
- Qing Rong
- Han Yi (Me)

To run this project:

1. Download this zip file and extract it in your preferred file explorer.

2. Navigate to content.js in your preferred text/code editor.

3. Replace the string within the double quotations at the top of the file with your GPT-3.5-turbo-0613 API Key. Save the file. (Please read OpenAI's documentation on APIs and rate limits. This can be found here: https://platform.openai.com/docs/guides/rate-limits?context=tier-free). Optionally, you may want to save your API key within an .env.local file.

4. Go to chrome://extensions/.

5. Select "Load unpacked" and select the med-extension folder.

6. To activate it, press Ctrl/Cmd + B. A pop up should appear.

7. To search a term, highlight it, and select Ctrl/Cmd + Shift + X. A tooltip popup should generate within a few seconds depending on request and internet speed to summarize the medical term. The tooltip stays on the screen for 5 seconds.
