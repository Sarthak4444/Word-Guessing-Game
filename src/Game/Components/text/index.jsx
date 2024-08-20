import './style.css';


const Type = {
SCORE: 'score',
QUESTION: 'question',
ANSWER_HINT: 'answer',
}

function Text (props) {

    const {Text='', type=Type.QUESTION, tailwind = ''} = props || {};

    let className = '';
    className += `text-${type}`

    className += ` ${tailwind}`

    return (

            <span className={className}>{Text}</span>

    )
} 


Text.Type = Type

export default Text