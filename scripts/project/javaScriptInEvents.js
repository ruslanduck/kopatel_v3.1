

const scriptsInEvents = {

	async General_Event38_Act19(runtime, localVars)
	{
		const params = new URLSearchParams(window.location.search);
		let rawName = params.get("name");
		if (rawName) {
		    try {
		        rawName = decodeURIComponent(rawName);
		    } catch (e) {
		        // fallback if decodeURIComponent fails
		        console.warn("Could not decode name, using raw value instead.");
		    }
		    runtime.globalVars.name = rawName;
		}
		
	},

	async Loading_sheet_Event8_Act19(runtime, localVars)
	{
		const params = new URLSearchParams(window.location.search);
		let rawName = params.get("name");
		if (rawName) {
		    try {
		        rawName = decodeURIComponent(rawName);
		    } catch (e) {
		        // fallback if decodeURIComponent fails
		        console.warn("Could not decode name, using raw value instead.");
		    }
		    runtime.globalVars.name = rawName;
		}
		
	},

	async Digging_sheet_Event612_Act10(runtime, localVars)
	{

	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
