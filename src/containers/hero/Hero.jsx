import Button from "../../components/button/Button";
import ColumnContainer from "../column-container/ColumnContainer";
import Container from "../container/Container";
import "./Hero.scss";

function Hero() {
    return (
        <div className="hero">
            <Container>
                <div className="hero__bg">
                    <div className="hero__container">
                        <div className="hero__content">
                            <ColumnContainer>
                                <h1 className="title">Front-End Developer</h1>
                                <p className="text">
                                    I'm a Front-End Developer with a great
                                    passion for programming and creating
                                    engaging websites. My calling is to develop
                                    unique interfaces that inspire users and
                                    improve their experience on the web.
                                </p>
                                <div className="buttons-container">
                                    <Button>View Work</Button>
                                    <Button>Hire Me</Button>
                                </div>
                            </ColumnContainer>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Hero;
