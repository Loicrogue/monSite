import React, { useRef, useState } from 'react';

interface ModalProps {
    isOpen: boolean;
    height?: string;
    width?: string;
    onClose: () => void;
    children: React.ReactNode;
    title?: string; // <--- Ajout ici
}

const ModalComponent: React.FC<ModalProps> = ({ 
    isOpen, 
    height = '90%', 
    width = '95%', 
    onClose, 
    children,
    title // <--- Récupération ici
}) => {
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
            <div 
                ref={modalRef} 
                className="bg-child-container-monSite rounded-lg shadow-lg relative flex flex-col" 
                style={{ width, height }}
            >
                {/* Header avec titre dynamique */}
                {title && (
                    <div className="p-4 border-b border-gray-300">
                        <h2 className="text-xl font-bold text-monSite">{title}</h2>
                    </div>
                )}

                {/* Contenu scrollable */}
                <div className="flex-1 overflow-y-auto p-4 scrollbar-child-container-monSite">
                    <div className="space-y-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalComponent;
