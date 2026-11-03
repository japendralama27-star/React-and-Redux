let CurrentTime = () => {
  let time = new Date();
  return (
    <p>
      This is the current time: {time.toLocaleDateString("en-NP")}-
      {time.toLocaleTimeString("en-NP")}
    </p>
  );
};

export default CurrentTime;
