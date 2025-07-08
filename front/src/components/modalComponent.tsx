import React, { useRef, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface ModalProps {
    isOpen: boolean;
    height?: string;
    width?: string;
    onClose: () => void;
    children: React.ReactNode;
    canScroll?: boolean;
}

const ModalComponent: React.FC<ModalProps> = ({ isOpen, height = '90%', width = '95%', onClose, children, canScroll = true }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [mouseDownOutside, setMouseDownOutside] = useState(false);

    if (!isOpen) return null;

    const handleMouseDown = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            setMouseDownOutside(true);
        } else {
            setMouseDownOutside(false);
        }
    };

    const handleMouseUp = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node) && mouseDownOutside) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            <div ref={modalRef} className="bg-child-container-monSite rounded-lg shadow-lg relative flex flex-col" style={{ width, height }}>
                <div className="p-4 mb-5 relative">
                    <button className="absolute top-2 left-2 text-gray-500 hover:text-black" onClick={onClose}>
                        <XMarkIcon className="size-8 border-2 rounded-full border-green-monSite cursor-pointer text-green-monSite hover:bg-green-monSite hover:text-child-container-monSite bg-child-container-monSite transition duration-300" />
                    </button>
                </div>
                <div className={`p-4 ${canScroll ? 'overflow-y-auto scrollbar-child-container-monSite' : ''} flex-1 ml-4 mr-4`}>
                    <div className="space-y-4">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default ModalComponent;
