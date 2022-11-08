import styled from "styled-components";

const LandingPageContainer = styled.div`
    color: #fff;
    padding-top: 70px;

    .landing-page-header {
        margin-bottom: 70px;
    }

    .landing-page-container {
        text-align: center;
        text-shadow: 0 0 4px #fff;
    }

    .letter-blue {
        color: var(--solid-blue);;
        text-shadow: 0 0 8px var(--shadow-blue);
    }

    .letter-green {
        color: var(--solid-green);
        text-shadow: 0 0 8px var(--shadow-green);
    }

    .letter-red {
        color: var(--solid-red);
        text-shadow: 0 0 8px var(--shadow-red);
    }

    .landing-page-name-container {
        text-align: center;
        margin: 30px 0;
    }

    .landing-page-form-label {
        margin-right: 20px;
    }

    .landing-page-form-input {
        padding: 2px;
    }

    .landing-page-create-room-container {
        margin: 30px 70px;
        border-top: 2px solid #fff;
        padding: 20px 0 0 50px;
    }
    
    .landing-page-section-title {
        margin-bottom: 25px;
    }

    .landing-page-form-container {
        padding-left: 55px;
    }

    /* .landing-page-submit {
        margin-left: 20px;
        padding: 2px 15px;
        background-color: var(--solid-blue);
        box-shadow: 0 0 10px 2px var(--shadow-blue);
        border: none;
        border-radius: 2px;
    }

    .landing-page-submit:hover {
        cursor: pointer;
        filter: brightness(1.15);
        transition: .4s;
    }

    .landing-page-submit:active {
        transform: scale(.95);
        filter: brightness(.95);
        transition: .3s;
    } */
`;

export default LandingPageContainer