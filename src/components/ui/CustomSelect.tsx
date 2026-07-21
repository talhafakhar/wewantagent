"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export interface CustomSelectOption {
    value: string;
    label: string;
}

interface CustomSelectProps {
    name: string;
    value: string;
    onChange: (name: string, value: string) => void;
    options: CustomSelectOption[];
    placeholder: string;
    required?: boolean;
    className?: string;
    theme?: "light" | "dark";
}

export default function CustomSelect({
    name,
    value,
    onChange,
    options,
    placeholder,
    required,
    className = "",
    theme = "light",
}: CustomSelectProps) {
    const [open, setOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onClickOutside = (e: MouseEvent) => {
            if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", onClickOutside);
        return () => document.removeEventListener("mousedown", onClickOutside);
    }, []);

    const selected = options.find((o) => o.value === value);
    const isDark = theme === "dark";

    return (
        <div ref={rootRef} className={`relative ${className}`}>
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className={
                    isDark
                        ? "flex w-full items-center justify-between rounded-lg border border-white/[0.12] bg-white/[0.03] px-4 py-3 text-left text-sm text-white focus:border-[#5EA8FF]/60 focus:outline-none focus:ring-2 focus:ring-[#5EA8FF]/30"
                        : "flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-3 text-left outline-none focus:ring-2 focus:ring-green-500"
                }
            >
                <span className={selected ? (isDark ? "text-white" : "text-gray-900") : (isDark ? "text-[#6b6f80]" : "text-gray-400")}>
                    {selected ? selected.label : placeholder}
                </span>
                <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""} ${
                        isDark ? "text-[#9095a6]" : "text-gray-500"
                    }`}
                />
            </button>

            {required && (
                <input
                    tabIndex={-1}
                    aria-hidden="true"
                    value={value}
                    required
                    onChange={() => {}}
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-0 w-full opacity-0"
                />
            )}

            {open && (
                <div
                    className={
                        isDark
                            ? "absolute z-20 mt-2 w-full overflow-hidden rounded-lg border border-white/[0.12] bg-[#0d0e14] shadow-xl"
                            : "absolute z-20 mt-2 w-full overflow-hidden rounded-md border border-gray-200 bg-white shadow-xl"
                    }
                >
                    {options.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => {
                                onChange(name, option.value);
                                setOpen(false);
                            }}
                            className={
                                isDark
                                    ? `w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-white/[0.06] ${
                                          option.value === value ? "bg-white/[0.08] text-[#5EA8FF]" : "text-[#eceef4]"
                                      }`
                                    : `w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-gray-100 ${
                                          option.value === value ? "bg-gray-100 font-medium text-gray-900" : "text-gray-700"
                                      }`
                            }
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
