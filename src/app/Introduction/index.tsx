import style from "./introduction.module.scss";

const Introduction = () => {
  return (
    <section className={`${style.introduction} Screen`} id="Introduction">
      <h1 className="text-6xl leading-tight">
        Olá, <br/>Eu Sou<br/><span className={style.name}>Luan Ribeiro</span>
      </h1>
    </section>
  );
};

export default Introduction;
