import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import Tabs from './TabComponent/Tabs';
import Lists from './TabComponent/Lists';

const Main = () => {
    

    const [state, setState] = useState({
        selected: "1",
        tabs: ["1", "2", "3", "4"],
        lists: [
            [
                {
                    left: "",
                    image: "",
                    name: "one",
                    description: "",
                    comment: "",
                    right: "",
                    tab: "1"
                },
                {
                    left: "",
                    image: "",
                    name: "two",
                    description: "",
                    comment: "",
                    right: "",
                    tab: "1"
                },
                {
                    left: "",
                    image: "",
                    name: "three",
                    description: "",
                    comment: "",
                    right: "",
                    tab: "1"
                }
            ],
            [
                {
                    left: "",
                    image: "",
                    name: "uno",
                    description: "",
                    comment: "",
                    right: "",
                    tab: "2"
                },
                {
                    left: "",
                    image: "",
                    name: "dos",
                    description: "",
                    comment: "",
                    right: "",
                    tab: "2"
                },
                {
                    left: "",
                    image: "",
                    name: "tres",
                    description: "",
                    comment: "",
                    right: "",
                    tab: "2"
                }
            ],
            [
                {
                    left: "",
                    image: "",
                    name: "eins",
                    description: "",
                    comment: "",
                    right: "",
                    tab: "3"
                },
                {
                    left: "",
                    image: "",
                    name: "zwei",
                    description: "",
                    comment: "",
                    right: "",
                    tab: "3"
                },
                {
                    left: "",
                    image: "",
                    name: "drei",
                    description: "",
                    comment: "",
                    right: "",
                    tab: "3"
                }
            ],
            [
                {
                    left: "",
                    image: "",
                    name: "un",
                    description: "",
                    comment: "",
                    right: "",
                    tab: "4"
                },
                {
                    left: "",
                    image: "",
                    name: "deux",
                    description: "",
                    comment: "",
                    right: "",
                    tab: "4"
                },
                {
                    left: "",
                    image: "",
                    name: "trois",
                    description: "",
                    comment: "",
                    right: "",
                    tab: "4"
                }
            ]
        ]
    })

    const changeSelected = tab => {
        setState({
            ...state,
            selected: tab
        })
        console.log("state.selected: ", state.selected);
    }

    return (
        <div className="user-dashboard-main section">
            <div className="user-dashboard-title">
                {
                    <Tabs tabs={state.tabs} selected={state.selected} changeSelected={changeSelected}/>
                    ||
                    <>
                        <Skeleton count={1} height={25} width={200} />
                        <Skeleton count={1} height={25} width={200} />
                        <Skeleton count={1} height={25} width={200} />
                        <Skeleton count={1} height={25} width={200} />
                    </>
                }
            </div>

            <hr />
            <div className="user-dashboard-main-body">
                {
                    <Lists lists={state.lists.filter(list => list.tab === state.selected)} />
                    // <Lists lists={state.lists} />

                    ||
                    <Skeleton count={5} height={125} />
                }
            </div>
        </div>
    );
};

export default Main;