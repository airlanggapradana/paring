"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: ((value: boolean) => void) | ((e: React.ChangeEvent<HTMLInputElement>) => void) | ((e: any) => void);
  name?: string;
  disabled?: boolean;
}

export function Checkbox({ label, checked = false, onChange, name, disabled }: CheckboxProps) {
  const [internalChecked, setInternalChecked] = useState(checked);
  
  const isChecked = onChange ? checked : internalChecked;
  const handleChange = () => {
    const newValue = !isChecked;
    if (onChange) {
      // Call onChange - it will handle both boolean and event signatures
      try {
        (onChange as any)(newValue);
      } catch (err) {
        // Fallback - try with event-like object
        const event = {
          target: {
            name,
            checked: newValue,
            type: 'checkbox'
          }
        } as React.ChangeEvent<HTMLInputElement>;
        (onChange as any)(event);
      }
    } else {
      setInternalChecked(newValue);
    }
  };

  return (
    <motion.label 
      whileHover={disabled ? {} : { x: 5 }} 
      className={`flex items-center gap-3 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      onClick={disabled ? undefined : handleChange}
    >
      <motion.div 
        whileTap={disabled ? {} : { scale: 0.8 }} 
        className={
          isChecked 
            ? "w-6 h-6 rounded-md bg-[#37A47C] flex items-center justify-center text-white shadow-sm"
            : "w-6 h-6 rounded-md border-2 border-slate-200 bg-white flex items-center justify-center text-transparent hover:border-[#37A47C] transition-colors"
        }
      >
        {isChecked ? (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
            <Check size={16} />
          </motion.div>
        ) : (
          <Check size={16} />
        )}
      </motion.div>
      <span className="text-slate-700 font-medium">{label}</span>
    </motion.label>
  );
}
