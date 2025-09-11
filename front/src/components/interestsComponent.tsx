import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const InterestsComponent: React.FC = () => {
  const { t } = useTranslation();

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const signets = [
    { id: "1", label: "Texte 1" },
    { id: "2", label: "Texte 2" },
    { id: "3", label: "Texte 3" },
    ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full py-5"
    >
      <div className="flex flex-row">
        <div className="flex flex-col gap-5">
            {signets.map((s) => (
                <motion.div
                key={s.id}
                onClick={() => setSelectedId(s.id)}
                initial={{ width: 200 }}
                animate={{ width: selectedId === s.id ? 250 : 200 }}
                whileHover={{ width: 250 }}
                transition={{ duration: 0.3 }}
                className="h-[60px] bg-monSite flex items-center justify-center text-black font-bold cursor-pointer"
                style={{
                    clipPath:
                    "polygon(0 0, 100% 0, 80% 50%, 100% 100%, 0 100%)",
                }}
                >
                {s.label}
                </motion.div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default InterestsComponent;
