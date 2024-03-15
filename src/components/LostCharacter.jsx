import '../styles/LostCharacter.css'

function LostCharacter() {

  return (
    <div className='pageHeader'>
      <h3 className="subHeaderText"> Seems that character has not been created yet.</h3>
      <img
        width={"100%"}
        height={"100%"}
        src="https://takeitpersonelly.com/wp-content/uploads/2020/04/old-1130743_1920.jpg?w=723"
        alt="lost adventurer"
      />
      <h3 className="subHeaderText">
        {" "}
        Roll one!
      </h3>
    </div>
  );
}

export default LostCharacter;