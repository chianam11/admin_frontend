"use client";
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeChanger = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Thiết lập mounted là true khi component đã render trên client
    useEffect(() => {
        setMounted(true);
    }, []);

    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    if (!mounted) return null;

    return (
        <div>
            <button
                className="text-gray-500 dark:text-gray-400"
                onClick={handleTheme}
                aria-label="Toggle Theme"
            >
                {theme === "dark" ? (
                    <FontAwesomeIcon icon={faSun} className="w-5 h-5" />
                ) : (
                    <FontAwesomeIcon icon={faMoon} className="w-5 h-5" />
                )}
            </button>
        </div>
    );
};

export default ThemeChanger;
