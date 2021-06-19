import { ConstantChats } from './ConstantChats';
export class OutputChats {
    output(input) {
        const constant = new ConstantChats();
        let product;
        let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
        text = text
          .replace(/ a /g, " ")   // 'tell me a story' -> 'tell me story'
          .replace(/i feel /g, "")
          .replace(/whats/g, "what is")
          .replace(/please /g, "")
          .replace(/ please/g, "")
          .replace(/r u/g, "are you");
      
        if (this.compare(constant.prompts, constant.replies, text)) { 
          // Search for exact match in `prompts`
          product = this.compare(constant.prompts, constant.replies, text);
        } else if (text.match(/thank/gi)) {
          product = "You're welcome!"
        } else if (text.match(/(corona|covid|virus)/gi)) {
          // If no match, check if message contains `coronavirus`
          product = constant.coronavirus[Math.floor(Math.random() * constant.coronavirus.length)];
        } else {
          // If all else fails: random alternative
          product = constant.alternative[Math.floor(Math.random() * constant.alternative.length)];
        }
        // Update DOM
        return product;
      }
      private compare(promptsArray, repliesArray, string) {
        let reply;
        let replyFound = false;
        for (let x = 0; x < promptsArray.length; x++) {
          for (let y = 0; y < promptsArray[x].length; y++) {
            if (promptsArray[x][y] === string) {
              let replies = repliesArray[x];
              reply = replies[Math.floor(Math.random() * replies.length)];
              replyFound = true;
              // Stop inner loop when input value matches prompts
              break;
            }
          }
          if (replyFound) {
            // Stop outer loop when reply is found instead of interating through the entire array
            break;
          }
        }
        return reply;
      }
}