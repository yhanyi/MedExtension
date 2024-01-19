# Med-Ext

A simple Chrome extension built as a draft prototype for NUS YLLSoM's Health Hack 2024. This chrome extension sends a highlighted snippet of text and requests ChatGPT's Turbo-3.5 model to summarise a medical term into within 5 words. The prompt used in the prototype is "Summarize [medical term] within 5 words in layman terms". It aims to make less accessible medical jargon more understandable to the public.

## Team

- Hong Ruey
- Jia Yang
- Marcus
- Qing Rong
- Han Yi (Me)

## Usage

To run this project:

1. Download this zip file and extract it in your preferred file explorer.

2. Navigate to content.js in your preferred text/code editor.

3. Replace the string within the double quotations at the top of the file with your GPT-3.5-turbo-0613 API Key. Save the file. (Please read OpenAI's documentation on APIs and rate limits. This can be found here: https://platform.openai.com/docs/guides/rate-limits?context=tier-free). Optionally, you may want to save your API key within an .env.local file.

4. Go to chrome://extensions/.

5. Select "Load unpacked" and select the med-extension folder.

6. To activate it, press Ctrl/Cmd + B. A pop up should appear.

7. To search a term, highlight it, and select Ctrl/Cmd + Shift + O. A tooltip popup should generate within a few seconds depending on request and internet speed to summarize the medical term. The tooltip stays on the screen for 5 seconds.

8. Optionally, if the snippet is not running, there might be other keyboard macros that override the default keyboard macro. To change the default macro, you can open the content.js file and navigate to line 83. Replace the letter in the event.key parameter to a key that is available. The default is "o".

## Improvements

Some changes we can potentially make:

- Allow the extension to dynamically take in a different prompt as input and generate an answer. This allows us to use ChatGPT for other purposes, such as summarizing a large chunk of text or section from an article. This is highly extensible in functionality.

- Minor QOL updates such as changing the way the response is outputted, for example copying the response to clipboard rather than statically displaying an answer.
