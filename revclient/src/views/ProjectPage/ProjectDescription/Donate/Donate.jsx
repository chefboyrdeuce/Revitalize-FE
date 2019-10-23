import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { formatMoney, addUpDonations, donationCount } from '../../../../helpers/helpers';
import ProgressBar from '../../../../components/ProgressBar/ProgressBar';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER } from '../../../../graphql/queries/Users';

import '@lottiefiles/lottie-player'; 

const Donate = props => {
	const raised = addUpDonations(props.projectData.donations);
	const budget = formatMoney(props.projectData.goalAmount);
	const budgetProgressBar = props.projectData.goalAmount;
	const totalDonations = donationCount(props.projectData.donations.length);
	const totalNumberOfDonations = props.projectData.donations ? totalDonations : 0;
	const [applicationStatus, setApplicationStatus] = useState('notApplied');

	const { data } = useQuery(GET_USER);

	useEffect(() => {
		if (props.projectData.applicants && data) {
			props.projectData.applicants.map(eachApplicant => {
				if (eachApplicant.profile.id === data.me.id) {
					setApplicationStatus(eachApplicant.status);
				}
			});
		}
	}, [props.projectData.applicants, data]);

	return (
		<div className="donateContainer">
			<div className="donateInnerDiv">
				<p className="donationMoney">
					<span className="large">${raised}</span>
					<span className="small">raised out of ${budget}</span>
				</p>
				<div className="progress-bar">
					<ProgressBar progress={raised} startingPoint={budgetProgressBar} />
				</div>
				<p className="donatorCount">{totalNumberOfDonations}</p>
				<p className="donorText">{`${totalNumberOfDonations === 1 ? 'Donor' : 'Donors'}`}</p>
				<div className="donationButtons">
					{/* <Link to={`/project/donate/${match.params.id}`}> */}
					<button className="purple" onClick={() => props.setDonateModal(true)}>
						Donate now
					</button>
					{/* </Link> */}
					<button className="white" onClick={() => props.setModal(true)}>
						Share
					</button>
				</div>
				<div className="mid-line-container">
					<div className="mid-line"></div>
					<p>or</p>
					<div className="mid-line"></div>
				</div>
				<div className="apply-button">
					{applicationStatus.toLowerCase() === 'pending' ? (
						<button style={{ cursor: 'default' }} disabled={true}>
							Application Pending...
						</button>
					) : applicationStatus.toLowerCase() === 'accepted' ? (
						<button style={{ cursor: 'default' }} disabled={true}>
							Accepted!
						</button>
					) : (
						<Link to={`/project/${props.match.params.slug}/studentapplicationform`}>
							<button>Apply to Project</button>
						</Link>
					)}
				</div>
				<p className="lastText">
					Partner with growing donors who are eager to see the transformation and economical growth of
					Detroit.
				</p>
			</div>
		</div>
	);
};

export default withRouter(Donate);
