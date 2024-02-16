import React from 'react';
function LeftPanelComponent({ genres }: { genres: any[] }) {
    const prepareGenres = () => {
        return genres.map((item, index) => {
            if (item) {
                return <li key={index} className="custom-list-item list-group-item d-flex justify-content-between align-items-center">
                    {item && item}
                </li>
            }
        })
    }
    return (
        <div>
            <ul className="list-group">
                {prepareGenres()}
            </ul>
        </div>
    )
}
export default LeftPanelComponent;
