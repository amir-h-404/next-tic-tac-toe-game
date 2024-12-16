import React from 'react';

interface ButtonWithIconProps {
    icon: React.ReactNode;
    text: string;
}

// FC = functional component
const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ icon, text }) => {
    return (
        <button className={'bg-blue-200 m-1 flex px-3 items-center justify-center gap-3 ' +
            'text-xl rounded-lg py-4 transition-colors hover:bg-blue-300'}>
            {icon}
            <span>{text}</span>
        </button>
    );
};

export default ButtonWithIcon;
