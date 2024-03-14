function LostCharacter() {
  return (
    <div>
      <h1 id="lostHeader"> Lookin' for someone? Yeah, you just missed 'im.</h1>
      <img
        id="lostAdventurer"
        width={"100%"}
        height={"100%"}
        src="https://cdn.lifehack.org/wp-content/uploads/2014/04/feeling-lost1.jpeg"
        alt="lost adventurer"
      />
      <h2 id="lostMessege">
        {" "}
        Stopping for directions won't bring the Tarrasque!
      </h2>
    </div>
  );
}

export default LostCharacter;
