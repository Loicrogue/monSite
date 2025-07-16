const useTheme = () => {
    const theme = localStorage.getItem('theme') || 'light';
	document.documentElement.classList.toggle('light', theme === 'light');
	document.documentElement.classList.toggle('dark', theme === 'dark');
	document.documentElement.classList.toggle('red', theme === 'red');    
	document.documentElement.classList.toggle('blue', theme === 'blue');
};

export default useTheme;