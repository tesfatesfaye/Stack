const boilerPlateInstruction = `You are to help me assess the quality of the model code  responses; you will use the “Code v Code Official Instructions” file and the “[Bulba Extensions] Tools APIs “file. I will pass all the relevant data, such as the starting prompt that was passed to the models, as well as their responses, you are to assess the quality of both responses as well as compare them and write a high-quality justification per the instructions provided by the “Code v Code Official Instructions” file and the “[Bulba Extensions] Tools APIs “files. 
Prompt: This is the user's request. The prompt might be a conversation with multiple turns, but the chatbot is responding to the final request.
Code Response: This includes the Chain of Thought, Code, Output and Error sections. Code Responses use extension tools to produce the output.
SxS Score: You will provide a side by side score to specify the extent to which you prefer one response over the other.
SxS Justification: You will justify your answer and prove that the score you have selected carries weight.
When judging the two responses, keep in mind that the responses you are looking at could be the last code response or an execution step in a series of steps. We can't know for sure, so we should assume that another code step could come afterward.
You should judge based on which response moves the model in the best direction to achieve the best answer to the prompt - the model will often state its thought process in the comments of the code section, so we should also take that into consideration. For the comparison/Side-by-Side rating, the preference is based on the output of the model and how useful it is. If one response is partially fulfilling but uses the correct tool, that doesn't mean it's better than the completely fulfilling response that uses a partially correct tool.
` ;



const response1 = `Rate Response 1 on the 4 dimensions, Don't forget that out of 4 the function correctness will either be equal or less than the tool correctness, and the parameter correctness will either be equal or less than the function correctness
however, the fulfillment is not bound by these constraints and while it is highly likely to be correlated with the other dimensions, it is scored independently and out of a score , make sure you review the “Code v Code Official Instructions”. file in your memory.`;
const response2 = `Rate Response 2 on the 4 dimensions Don't forget that out of 4 the function correctness will either be equal or less than the tool correctness, and the parameter correctness will either be equal or less than the function correctness
however, the fulfillment is not bound by these constraints and while it is highly likely to be correlated with the other dimensions, it is scored independently and out of a score , make sure you review the “Code v Code Official Instructions”. file in your memory.`;
const score = `Provide a side-by-side score to specify how much you prefer one response over the other, per the “Code v Code Official Instructions” file, make sure you review it in your memory.`;
const justification = `Write a good justification based on the examples and structure of what is presented as a good justification per the “Code v Code Official Instructions” file. Structure it with an opening statement comparing the two outputs and the degree to which one is better than the other or equivalent, then follow with how they compare in the following dimensions, 
Tool correctness : 


Function correctness:

Parameter Correctness: 

Fulfillment:
It should also meet the criteria to cover the following points: 
•  A clear verdict stating which response is better. 1-2 sentences in the general format of "Response 1 is better than/more fulfilling than/superior to/etc Response 2 because of x, y, z."
•  A declaration of the tools used and why they were/were not correct.
•  A declaration of the functions used and why they were/were not correct.
•  A declaration of the parameters used and why they were/were not correct.
•  An explanation about how each response did or did not fulfill the prompt, and why one response is more or less fulfilling than the other. Alternatively, this can be an explanation as to why the responses are roughly the same in terms of fulfillment.
•  Evidence/Specific Examples to back up the justification.
•  If the Output is empty or blank, the justification must indicate this
•  If there is an Error populated, the justification must indicate this


Keep it very similar to the examples given in the “Code v Code Official instructions” document. The length of the justification should be between 250-300 words no more no less
`;
const append = ` \n For now, just take in the information; don’t respond with the answer. I will ask you questions individually. I wish to tackle this problem piece by piece instead of as a monolith.`;



const style = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "10px",
  margin: "20px",
  marginTop: "50px",
};

export {
  boilerPlateInstruction,
  style,
  response1,
  response2,
  score,
  justification,
  append,
};
