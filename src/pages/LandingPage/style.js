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
        margin: 30px auto;
        border-top: 2px solid #fff;
        padding: 20px 0 0 50px;
        width: fit-content;
    }
    
    .landing-page-section-title {
        margin-bottom: 25px;
    }

    .landing-page-form-container {
        padding-left: 55px;
    }

    .error-message {
        text-align: center;
        color: red;
        font-size: 12px;
        font-weight: 100;
        font-style: italic;
        margin-top: 8px;
    }
`;

export default LandingPageContainer