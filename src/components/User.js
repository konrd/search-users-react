import React from 'react';

const colors = [
    '#3DCCE1',
    '#C767D1',
    '#3FAAEB',
    '#B94860',
    '#94C278',
    '#3359F4',
    '#BADC87'
];

const User = ({id, currentUser}) => {

    const getColorAvatar = () => {

        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <tr className="userRow">
            <td className="align-middle indexCol">{id + 1}</td>
            <td className="align-middle avatarCol">
                <div className="userAvatar" style={{backgroundColor: getColorAvatar()}}>
                    <span>{currentUser.name[0]}</span>
                </div>
            </td>
            <td className="align-middle">
                <div className="userName">{currentUser.name}</div>
                <div className="countPub">{currentUser.count_pub} публ.</div>
            </td>
            <td className="align-middle medalBlock">
                {currentUser.top ? <img className="medalImage" src={`/images/${currentUser.top}top.svg`}  alt="asd" /> : ""}
            </td>
            <td>
                <span className="pageViews">{currentUser.pageviews}</span>
            </td>
        </tr>
    );
};

export default User;
