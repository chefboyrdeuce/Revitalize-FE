import React, { useState } from 'react';
import Form1 from './Form1/Form1'
import Form2 from './Form2/Form2'
import cloud from '../../assets/CreateProjWizard/bottom-cloud-layer.png'





const CreateProjectWizard = () => {
    const [projectDetails, setProjectDetails] = useState({ projName: "", projStartDate: "", projDescription: "", projOwnerName: "", projAddress: "", city: "", state: "", zip: null, projectDuration: null, projBudget: null, difficultyLevel: null })
    const [formPosition, setFormPosition] = useState(1)

    const handleChanges = event => setProjectDetails({ ...projectDetails, [event.target.name]: event.target.value })
    console.log(projectDetails);
    return (
        <div className="create-project-page">
            <h2>Revitalize</h2>
            <div className="form-plus-quote-container">

                <div className="quote">
                    <h2>“Yesterday I was clever, so I <br /> wanted to change the world.<br /> Today I am wise, so I am<br /> changing myself.”</h2>
                    <p>Jalal ad-Din Rumi PERSIAN POET</p>
                    <img src={cloud} alt="cloud image" className="bottom-cloud" />
                </div>

                <div className="ui-section">
                    <div className="progress-tracker">
                        <h1 className="title">Create Project</h1>
                        <div className="tracker">
                            <div className={formPosition >= 1 ? `step active` : `step`} ></div>
                            <div className={formPosition >= 2 ? `step active` : `step`}></div>
                            <div className={formPosition >= 3 ? `step active` : `step`}></div>
                        </div>
                    </div>

                    {formPosition === 1
                        ? <Form1
                            setFormPosition={setFormPosition}
                            handleChanges={handleChanges}
                            projName={projectDetails.projName}
                            projStartDate={projectDetails.projStartDate}
                            projDescription={projectDetails.projDescription}
                        />
                        : formPosition === 2
                            ? <Form2
                                setFormPosition={setFormPosition}
                                handleChanges={handleChanges}
                                projName={projectDetails.projName}
                                projStartDate={projectDetails.projStartDate}
                                projDescription={projectDetails.projDescription}
                            />
                            : formPosition === 3
                                ? 'form 3'
                                : null
                    }
                </div>

            </div>
        </div>
    );
};

export default CreateProjectWizard;