const useTheme = () => {
    const theme = localStorage.getItem('theme') || 'light';
	document.documentElement.classList.toggle('light', theme === 'light');
	document.documentElement.classList.toggle('dark', theme === 'dark');
	document.documentElement.classList.toggle('red', theme === 'red');    
	document.documentElement.classList.toggle('orange', theme === 'orange');
	document.documentElement.classList.toggle('yellow', theme === 'yellow');
	document.documentElement.classList.toggle('green', theme === 'green');
	document.documentElement.classList.toggle('blue', theme === 'blue');
	document.documentElement.classList.toggle('purple', theme === 'purple');
};

export default useTheme;