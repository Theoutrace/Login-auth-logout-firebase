import classes from './StartingPageContent.module.css';

const StartingPageContent = () => {
  return (
    <section className={classes.starting}>
      <h1>Welcome on Board!</h1>
      <img src='https://cdn-icons-png.flaticon.com/512/25/25694.png' width='50' height='50' alt=''></img>
      <h2 className={classes.homeText}>Home Page</h2>
    </section>
  );
};

export default StartingPageContent;
