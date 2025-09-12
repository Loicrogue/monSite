import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const InterestsComponent: React.FC = () => {
  const { t } = useTranslation();

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const signets = [
    { id: "1", label: t('pages.interests.signets.1') },
    { id: "2", label: t('pages.interests.signets.2') },
    { id: "3", label: t('pages.interests.signets.3') },
    ];

  return (
    <div className="flex flex-row justify-items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-3/20 h-full py-5"
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
                    className="h-[60px] bg-background-signets-monSite flex items-center pl-5 text-signets-monSite font-bold cursor-pointer"
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
        <motion.div
          initial={{ opacity: 0, y: 500 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-17/20 h-full p-10"
        >
          <div className="flex flex-row h-full rounded-lg border-1 border-black shadow-xl p-5">
            aaa
          </div>
        </motion.div>
    </div>
  );
};

export default InterestsComponent;
