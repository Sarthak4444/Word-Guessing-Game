import Input from "../Components/input";
import Text from "../Components/text";
import "./style.css";

function Question({ ques, hint, score, setQues, setScore, answer }) {
  const arr = ques.split("");
  let arrInp = "";

  function handleInput(value) {
    arrInp = arrInp + value;


    if (arrInp.toLocaleLowerCase() === answer) {
      setTimeout(() => {
        alert("Correct");
        arrInp = "";
        setScore(score + 1);
  
        setQues(Math.floor(Math.random() * 11));
        value = "";
        
      }, 500);

    } else if (arrInp.length === answer.length) {
      setTimeout(() => {
        value = "";
        alert("Wrong");
        setQues(Math.floor(Math.random() * 11));
        arrInp = "";
        value = "";
        
      }, 500);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center p-8 bg-[#073b4c] rounded-3xl">
      <div className="pb-5">
        {arr.map((data, i) => {
          if (data === "_")
            return <Input key={i} score={score} onInput={handleInput} />;
          else return <Text key={i} Text={data} type={Text.Type.QUESTION} tailwind="font-semibold text-5xl text-[#faf0ca] mx-2"/>;
        })}
      </div>
      <div>
        <Text
          Text={hint}
          type={Text.Type.ANSWER_HINT}
          tailwind="text-[#c8e0f4] font-semibold text-3xl"
        />
      </div>
    </div>
  );
}

export default Question;
