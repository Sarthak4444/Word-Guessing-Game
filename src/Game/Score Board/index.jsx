import Text from '../Components/text'
import Tag from '../Components/tag'
import './style.css'

function ScoreBoard ({score}) {
    return (
        <div className="score flex flex-col justify-center items-center p-4 mt-4">
            <Tag />
            <Text Text={score} type={Text.Type.SCORE} tailwind="text-yellow-500 text-5xl font-bold mt-2"/>
        </div>
    )
}

export default ScoreBoard