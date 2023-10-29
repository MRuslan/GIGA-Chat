<script>
	/**
	 * Svelte
	 */
	import { setContext } from 'svelte';


	/**
	 * Get a cookie
	 * Source MDN / W3schools
	 * https://www.w3schools.com/js/js_cookies.asp} 
	 */
	const getCookie = (cname, defaultValue) => {
	    let name = cname + '=';
	    let decodedCookie = decodeURIComponent(document.cookie);
	    let ca = decodedCookie.split(';');
	    for(let i = 0; i < ca.length; i++) {
	        let c = ca[i];
	        while (c.charAt(0) == ' ') {
	        	c = c.substring(1);
	        }
	        if (c.indexOf(name) == 0) {
	        	return c.substring(name.length, c.length);
	        }
	    }

	    if(typeof defaultValue !== 'undefined') {
	    	return defaultValue;
	    } else {
	    	return '';
	    }
	}


	/**
	 * Set a cookie
	 * Source MDN / W3schools
	 * https://www.w3schools.com/js/js_cookies.asp
	 */
	const setCookie = (cname, cvalue, exdays) => {
	    let d = new Date();
	    d.setTime(d.getTime() + (exdays*24*60*60*1000));
	    let expires = 'expires='+ d.toUTCString();
	    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
	}


	/**
	 * Set Context
	 */
	setContext('cookie', {
		getCookie,
		setCookie,
	});
</script>

<slot />