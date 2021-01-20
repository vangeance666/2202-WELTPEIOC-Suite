var ctxHelper = context.helper();	




// End of Display Side menu

// "row-home"
// "row-volatility"
// "row-triage"
// "row-malware"
// "row-event"
// "row-about"
// "row-technologies"
// "row-review"



// gridClass, colorStyle, title, desc, iconClass








var triageInstructionsCtx = ctxHelper.genPageIntroCardCtx("Instructions", "fas fa-info-circle", [
	ctxHelper.genParaCtx("Fill in case name & choose folder location to dump analysis output", "", "")
]);



var triageFunctionsDescCtx = ctxHelper.genPageIntroCardCtx("Functionalities", "fas fa-atom", [
	ctxHelper.genParaCtx("The whole triage process covers the following ", "h4 col-12 mb-5" ),
	ctxHelper.genTriageCardCtx("triage-func-process", "col-xl-4 col-lg-6 col-md-6 triage-desc-card", "border-bottom-success", "", "Processes", "triage-func-process-label", "", "fa-2x fas fa-microchip"),
	ctxHelper.genTriageCardCtx("triage-func-files", "col-xl-4 col-lg-6 col-md-6 triage-desc-card", "border-bottom-success", "", "Files", "triage-func-files-label", "", "fa-2x fas fa-file-alt"),

	ctxHelper.genTriageCardCtx("triage-func-domains", "col-xl-4 col-lg-6 col-md-6 triage-desc-card", "border-bottom-success", "", "Domains", "triage-func-domains-label", "", "fa-2x fas fa-server"),
	ctxHelper.genTriageCardCtx("triage-func-malware", "col-xl-4 col-lg-6 col-md-6 triage-desc-card", "border-bottom-success", "", "Malware", "triage-func-malware-label", "", "fa-2x fas fa-biohazard icon-cog"),
	ctxHelper.genTriageCardCtx("triage-func-logs-analysis", "col-xl-4 col-lg-6 col-md-6 triage-desc-card", "border-bottom-success", "", "Logs-Analysis", "triage-func-logs-analysis-label", "", "fa-2x fas fa-chart-area"),
	
	
	ctxHelper.genTriageCardCtx("triage-func-virustotal", "col-xl-4 col-lg-6 col-md-6 triage-desc-card", "border-bottom-success", "", "Virustotal", "triage-func-virustotal-label", "", "fa-2x fas fa-viruses")],
	"row"
);


var triageRequiredFieldsCtx = ctxHelper.genRequiredTextCtx('trigage-card-input-fields',
	'Please fill in the required fields',
	'triage-card-input-case-name', //Try impv to put list and handle it
	'Case name', 
	'info');

var triageRequiredInputCtx = ctxHelper.genFileSelectCtx("triage-card-select_dump_folder",
	"Choose your case folder",
	"triage-dump-folder",
	"Choose folder...",
	"FILE",
	"triage-dump-run",
	"Execute analysis",
	"fas fa-play",
	"info"
);


var triageResultsSaveButtonCtx = []

var triageResultsMetaNameCtx = 
	ctxHelper.genNoImageCardCtx("triage-result-meta-name", // card ID
			"col-xl-6 col-lg-6 col-md-6 triage-results-card mt-3", //gridClass
			"py-0", //colorStyle
			"border-bottom-info", //hoverStyle
			"Name", //title
			"triage-result-meta-name-label", //descId
			"ICTNYP-NB17");

// genNoImageCardCtx(cardId, gridClass, colorStyle, hoverStyle, title, descId, desc) {
var triageResultsMetaImageDateCtx = 
	ctxHelper.genNoImageCardCtx("triage-result-meta-datetime", // card ID
		"col-xl-6 col-lg-6 col-md-6 triage-results-card mt-3", //gridClass
		"py-0", //colorStyle
		"border-bottom-info", //hoverStyle
		"Image DateTime", //title
		"triage-result-meta-datetime-label", //descId
		"2020-10-27 12:49:25 UTC+0000");

var triageResultsMetaModelCtx = 
	ctxHelper.genNoImageCardCtx("triage-result-meta-model", // card ID
			"col-xl-6 col-lg-6 col-md-6 triage-results-card mt-3", //gridClass
			"py-0", //colorStyle
			"border-bottom-info", //hoverStyle
			"Model", //title
			"triage-result-meta-model-label", //descId
			"Latitude 5590");

var triageResultsMetaManufacturerCtx = 
	ctxHelper.genNoImageCardCtx("triage-result-meta-manufacturer", // card ID
			"col-xl-6 col-lg-6 col-md-6 triage-results-card mt-3", //gridClass
			"py-0", //colorStyle
			"border-bottom-info", //hoverStyle
			"Manufacturer", //title
			"triage-result-meta-manufacturer-label", //descId
			"Dell Inc.");



// Name ImgDateTime Model Manufacturer 
var triageResultProcessCountCtx = 
	ctxHelper.genTriageCardCtx("triage-result-process-info", // card ID
		"col-xl-6 col-lg-6 col-md-6 triage-results-card mt-3", 
		"border-bottom-primary", 
		"", 
		"Number of Processes", 
		"triage-process-info-label", 
		"101 "+ "Processes running", 
		"fa-3x fas fa-microchip");

var triageResultDomainResultsCtx = 
	ctxHelper.genTriageCardCtx("triage-result-domain-info", // card ID
		"col-xl-6 col-lg-6 col-md-6 triage-results-card mt-3", 
		"border-bottom-primary", 
		"", 
		"Domains/IPS Found", 
		"triage-domain-info-label", 
		"3 "+ "IP Addresses Found", 
		"fa-3x fas fa-server");

var triageResultMalignFilesCtx = 
	ctxHelper.genTriageCardCtx("triage-result-malign-files-info", // card ID
		"col-xl-6 col-lg-6 col-md-6 triage-results-card mt-3", 
		"border-bottom-danger", 
		"", 
		"Number of Malign/suspicious Files", 
		"triage-malign-files-info-label", 
		"3 out of 200 are flagged", 
		"fa-3x fas fa-viruses");

var triageResultMalignEventsCtx = 
	ctxHelper.genTriageCardCtx("triage-result-malign-events-info", // card ID
		"col-xl-6 col-lg-6 col-md-6 triage-results-card mt-3", 
		"border-bottom-danger", 
		"", 
		"Flagged Events", 
		"triage-malign-events-info-label", 
		"2 suspicious events found", 
		"fa-3x fas fa-viruses");


var triageResultPstreeResultsCtx = ctxHelper.genTableWithDivCtx("triage-pstree-table-div", 
	"triage-pstree-inner-div", 
	"triage-pstree-table",
	'Process Tree results',
	["Name", "PID", "PPID", "Threads", "Handles", "Time"],
	[
		["Name", "PID", "PPID", "Threads", "Handles", "Time"]
	]);

console.log(HTML(triageResultPstreeResultsCtx));

var triageResultWhoIsResultsCtx = ctxHelper.genTableWithDivCtx("triage-whois-table-div", 
	"triage-whois-inner-div", 
	"triage-whois-table", 
	'WhoIsDomain Lookup for IP Addresses', 
	["IP", "Organisation", "HostName", "ISP", "Continent", "Country", "State/Region", "City"],
	[
		["IP", "Organisation", "HostName", "ISP", "Continent", "Country", "State/Region", "City"]
		// ["IP Address", "Org" "Security.evtx", "15", "Your mother v cute"],
		// ["Sunday 2359", "Security.evtx", "15", "Jerome so cute wow hehe"],
	]);



var triageResultEvtTableCtx = ctxHelper.genTableWithDivCtx("triage-evt-table-div", 
	"triage-evt-inner-div", 
	"triage-evt-table", 
	'Event Logs Analysis', 
	['RuleTriggered', 'RuleName', 'EventID', 'Timestamp', 'EventRecordID', 'Description', 'IPAddress'],
	[
		['RuleTriggered', 'RuleName', 'EventID', 'Timestamp', 'EventRecordID', 'Description', 'IPAddress']
	]);

var triageResultsExesTableCtx = ctxHelper.genTableWithDivCtx("triage-exes-table-div", 
	"triage-exes-inner-div", 
	"triage-exes-table", 
	'Executables', 
	["File Name", "MD5", "SHA1", "VirusTotal", "Heuristics Indicators", "Tensorflow Model"],
	[
		["JeromeNoodes", "SHA1", "HashYourDaddy", "30/60", "1/20", "73.5%"],
		["JeromeNoodes1", "SHA1", "HashYourDaddy2", "30/60", "1/20", "73.5%"]
	]);

var triageResultsDllTableCtx = ctxHelper.genTableWithDivCtx("triage-dlls-table-div", 
	"triage-dlls-inner-div", 
	"triage-dlls-table", 
	'Dynamic Linking Libraries (DLLs)', 
	["File Name", "MD5", "SHA1", "VirusTotal", "Heuristics Indicators", "Tensorflow Model"],
	[
		["JeromeNoodes", "SHA1", "HashYourDaddy", "30/60", "1/20", "73.5%"],
		["JeromeNoodes1","SHA1", "hashYourDaddy2", "30/60", "1/20", "73.5%"]
	]);



var triageResultsPanelCtx = ['div', {id:'res-triage-panel', class: 'col-xl-12 col-md-12 mb-4 results-container'} ,
	['div', {class: 'card'},
		ctxHelper.genCardHeaderWithEleCtx("Results",
			"m-0 font-weight-bold text-secondary", 
			"ml-2 fa-1x fas fas fa-chart-bar",
			['a', {id: 'res-triage-save-btn', class: 'float-right btn-sm btn-success btn-icon-split'},
				['span', {class: 'icon text-white-50'},
					['i', {class: 'fas fa-save'}]
				],
				['span', {class: 'text btn-white'}, 'Save triage results']
			]),
			['div', {class: 'card-body row'},
				triageResultsMetaNameCtx,
				triageResultsMetaImageDateCtx,
				triageResultsMetaModelCtx,
				triageResultsMetaManufacturerCtx,

				triageResultProcessCountCtx,
				triageResultDomainResultsCtx,
				
				triageResultMalignFilesCtx,
				triageResultMalignEventsCtx,

				//Tables
				triageResultPstreeResultsCtx,			
				triageResultWhoIsResultsCtx,					
				triageResultsExesTableCtx,
				triageResultsDllTableCtx,
				triageResultEvtTableCtx
			]	

	]

];




var malwareFunctionsCtx = ctxHelper.genPageIntroCardCtx("Functions", "fas fa-atom", [
	ctxHelper.genParaCtx("This module analyses Portable Executables (PE) files in several aspect", "fa-2x h4 col-12 mb-5" ),
	ctxHelper.genMalwareCardCtx("malware-func-heuristics", "col-xl-3 col-lg-6 col-md-6 triage-desc-card", "border-bottom-primary", "", "Heuristics", "malware-func-heuristics-label", "", "fa-2x fas fa-viruses"),
	ctxHelper.genMalwareCardCtx("malware-func-entropy", "col-xl-3 col-lg-6 col-md-6 triage-desc-card", "border-bottom-primary", "", "Entropy", "malware-func-entropy-label", "", "fa-2x fas fa-sort-numeric-up-alt"),
	ctxHelper.genMalwareCardCtx("malware-func-imports", "col-xl-3 col-lg-6 col-md-6 triage-desc-card", "border-bottom-primary", "", "Functions", "malware-func-imports-label", "", "fa-2x fas fa-file-import"),
	ctxHelper.genMalwareCardCtx("malware-func-ml", "col-xl-3 col-lg-6 col-md-6 triage-desc-card", "border-bottom-primary", "", "ML", "malware-func-ml-label", "", "fa-2x fas fa-robot")],
	"row"
);

var malwareRequiredInputCtx = ctxHelper.genFileSelectCtx("malware-card-select-file",
	"Choose your PE file to analyse",
	"malware-input-file",
	"Choose file...",
	"FILE",
	"malware-btn-run",
	"Execute analysis",
	"fas fa-play",
	"info"
);


var malwareResultsHeuristicsCardCtx = ctxHelper.genMalwareDescCardCtx('malware-single-heuristics-info', 
	"col-xl-6 col-md-6 col-sm-12 col-12 justify-content-center",
	"col-xl-6 col-md-6 col-sm-12 col-12 justify-content-center",

	"primary",
	"",
	['div', {class: 'row no-gutters align-items-center'},
		['div', {class: 'col mr-2'},
			['div',{class: 'text-xl font-weight-bold text-primary text-uppercase mb-1'}, "Heuristics"],
			['div', {id:'res-malware-single-heuristics-score', class: 'h5 mb-0 font-weight-bold text-gray-800'}, "2 / 31 "]
		],
		['div', {class: 'col-auto'}, 
			['i' , {class: 'fas fa-viruses fa-6x text-gray-300'}]
		]
		
	]);

var triageResultsMetaNameCtx = 
	ctxHelper.genNoImageCardCtx("triage-result-meta-name", // card ID
			"col-xl-6 col-lg-6 col-md-6 triage-results-card mt-3", //gridClass
			"py-0", //colorStyle
			"border-bottom-info", //hoverStyle
			"Name", //title
			"triage-result-meta-name-label", //descId
			"ICTNYP-NB17");
		

var malwareResultHeuristicsScoreCtx = 
	ctxHelper.genMalwareCardCtx("malware-single-heuristics-info", // card ID
		"col-xl-6 col-lg-6 col-md-6 malware-results-card mt-3", 
		"border-left-primary", 
		"", 
		"Heuristics Score", 
		"malware-single-heuristics-info-label", 
		"2 / 23", 
		"fa-3x fas fa-viruses");

var malwareResultMLPredictionScoreCtx =
	ctxHelper.genMalwareCardCtx("malware-single-ml-score", 
		"col-xl-6 col-lg-6 col-md-6 malware-results-card mt-3", 
		"border-left-primary", 
		"", 
		"ML Prediction", 
		"malware-single-ml-score-label", 
		"60 %", 
		"fa-3x fas fa-robot"); 

var malwareResultImportsTableCtx = ctxHelper.genTableWithDivCtx("malware-single-Imports-table-div", 
	"malware-single-Imports-inner-div", 
	"malware-single-Imports-table", 
	'Imports Analysis', 
	["API", "Functions"],
	[
		["API", "Functions"]
	]);

var malwareResultEntropyTableCtx = ctxHelper.genTableWithDivCtx("malware-single-sections-table-div", 
	"malware-single-entropy-inner-div", 
	"malware-single-sections-table", 
	'PE Section Details', 
	["Name", "Entropy", "VirtualAddress", "Misc_VirtualSize", "SizeOfRawData", "Characteristics"],
	[
		["Name", "Entropy", "VirtualAddress", "Misc_VirtualSize", "SizeOfRawData", "Characteristics"]
	]);

var malwareResultEntropyDetailsCtx = ctxHelper.genMalwareDescCardCtx('malware-single-section-details', 
	'col-xl-12 col-lg-12 col-md-6 malware-results-card', 
	'border-bottom-primary', 
	"", //hoverStyle
	''); //Put table here


// Put into results panel
var malwareResultsPanelCtx = ['div', {id:'res-malware-single-panel', class: 'col-xl-12 col-md-12 mb-4 results-container'} ,
	['div', {class: 'card '},
		ctxHelper.genCardHeaderCtx("Results",
		"m-0 font-weight-bold text-secondary", 
		"ml-2 fa-1x fas fas fa-chart-bar"),
		['div', {class: 'card-body row'},
		// ['div', {class: 'card-header py-3'}]
			malwareResultHeuristicsScoreCtx,
			
			malwareResultMLPredictionScoreCtx,
			malwareResultImportsTableCtx,
			malwareResultEntropyTableCtx
		]

	]

];

var reviewInstructionsCtx = ctxHelper.genPageIntroCardCtx("Instructions", "fas fa-info-circle", [
	ctxHelper.genParaCtx("Browse to the case folder and click execute", "", "")
]);


var reviewRequiredCaseFolderCtx = ctxHelper.genFileSelectCtx("review-card-select-file",
	"Choose your case file",
	"review-input-file",
	"Choose file...",
	"FOLDER",
	"review-btn-dump",
	"Review case",
	"fas fa-play", //Icon Picture
	"info" //Style
);

// genInfoBodyCtx(title, desc, iconClass, colorStyle)


// ctxHelper.genHomeCardCtx("home-volatility-card", "col-xl-6 col-md-6 col-sm-12 col-12", "primary", "home-card", "Volatility", "Extract of host PC's RAM for Triage Analysis", "fa-6x fas fa-memory");


var evtInstructionsCtx = ctxHelper.genPageIntroCardCtx("Information", "fas fa-info-circle", [
	ctxHelper.genParaCtx("Browse to where your security.evtx file is and click execute.", "", "")
]);

var evtRequiredInputCtx = ctxHelper.genFileSelectCtx("evt-card-select-file",
	"Choose your Windows Log to analyse",
	"evt-input-file",
	"Choose file...",
	"FILE",
	"evt-btn-run",
	"Execute correlation",
	"fas fa-play",
	"info"
);

var evtResultEvtTableCtx = ctxHelper.genTableWithDivCtx("evt-evt-table-div", 
	"evt-evt-inner-div", 
	"evt-evt-table", 
	'Event Logs Analysis', 
	['RuleTriggered', 'RuleName', 'EventID', 'Timestamp', 'EventRecordID', 'Description', 'IPAddress'],
	[
		['RuleTriggered', 'RuleName', 'EventID', 'Timestamp', 'EventRecordID', 'Description', 'IPAddress']
	]);

var evtResultsPanelCtx = ['div', {id:'res-evt-panel', class: 'col-xl-12 col-md-12 mb-4 results-container'} ,
	['div', {class: 'card'},
		ctxHelper.genCardHeaderCtx("Results",
			"m-0 font-weight-bold text-secondary", 
			"ml-2 fa-1x fas fas fa-chart-bar"),
			['div', {class: 'card-body row'},
				evtResultEvtTableCtx
			]	

	]

];

var reviewResultsMetaNameCtx = 
	ctxHelper.genNoImageCardCtx("review-result-meta-name", // card ID
			"col-xl-6 col-lg-6 col-md-6 review-results-card mt-3", //gridClass
			"py-0", //colorStyle
			"border-bottom-info", //hoverStyle
			"Name", //title
			"review-result-meta-name-label", //descId
			"ICTNYP-NB17");

// genNoImageCardCtx(cardId, gridClass, colorStyle, hoverStyle, title, descId, desc) {
var reviewResultsMetaImageDateCtx = 
	ctxHelper.genNoImageCardCtx("review-result-meta-datetime", // card ID
		"col-xl-6 col-lg-6 col-md-6 review-results-card mt-3", //gridClass
		"py-0", //colorStyle
		"border-bottom-info", //hoverStyle
		"Image DateTime", //title
		"review-result-meta-datetime-label", //descId
		"2020-10-27 12:49:25 UTC+0000");

var reviewResultsMetaModelCtx = 
	ctxHelper.genNoImageCardCtx("review-result-meta-model", // card ID
			"col-xl-6 col-lg-6 col-md-6 review-results-card mt-3", //gridClass
			"py-0", //colorStyle
			"border-bottom-info", //hoverStyle
			"Model", //title
			"review-result-meta-model-label", //descId
			"Latitude 5590");

var reviewResultsMetaManufacturerCtx = 
		ctxHelper.genNoImageCardCtx("review-result-meta-manufacturer", // card ID
				"col-xl-6 col-lg-6 col-md-6 review-results-card mt-3", //gridClass
				"py-0", //colorStyle
				"border-bottom-info", //hoverStyle
				"Manufacturer", //title
				"review-result-meta-manufacturer-label", //descId
				"Dell Inc.");



// Name ImgDateTime Model Manufacturer 
// Rewview onwards from here
// 
// 
// 

var reviewResultProcessCountCtx = 
	ctxHelper.genReviewCardCtx("review-result-process-info", // card ID
		"col-xl-6 col-lg-6 col-md-6 review-results-card mt-3", 
		"border-bottom-primary", 
		"", 
		"Number of Processes", 
		"review-process-info-label", 
		"101 "+ "Processes running", 
		"fa-3x fas fa-microchip");

var reviewResultDomainResultsCtx = 
	ctxHelper.genReviewCardCtx("review-result-domain-info", // card ID
		"col-xl-6 col-lg-6 col-md-6 review-results-card mt-3", 
		"border-bottom-primary", 
		"", 
		"Domains/IPS Found", 
		"review-domain-info-label", 
		"3 "+ "IP Addresses Found", 
		"fa-3x fas fa-server");

var reviewResultMalignFilesCtx = 
	ctxHelper.genReviewCardCtx("review-result-malign-files-info", // card ID
		"col-xl-6 col-lg-6 col-md-6 review-results-card mt-3", 
		"border-bottom-danger", 
		"", 
		"Number of Malign Files", 
		"review-malign-files-info-label", 
		"3 out of 200 are flagged", 
		"fa-3x fas fa-viruses");

var reviewResultMalignEventsCtx = 
	ctxHelper.genReviewCardCtx("review-result-malign-events-info", // card ID
		"col-xl-6 col-lg-6 col-md-6 review-results-card mt-3", 
		"border-bottom-danger", 
		"", 
		"Flagged Events", 
		"review-malign-events-info-label", 
		"2 suspicious events found", 
		"fa-3x fas fa-viruses");


var reviewResultPstreeResultsCtx = ctxHelper.genTableWithDivCtx("review-pstree-table-div", 
	"review-pstree-inner-div", 
	"review-pstree-table",
	'Process Tree results',
	["Name", "PID", "PPID", "Threads", "Handles", "Time"],
	[
		["Name", "PID", "PPID", "Threads", "Handles", "Time"]
	]);

// console.log(HTML(reviewResultPstreeResultsCtx));


var reviewResultWhoIsResultsCtx = ctxHelper.genTableWithDivCtx("review-whois-table-div", 
	"review-whois-inner-div", 
	"review-whois-table", 
	'WhoIsDomain Lookup for IP Addresses', 
	["IP", "Organisation", "HostName", "ISP", "Continent", "Country", "State/Region", "City"],
	[
		["IP", "Organisation", "HostName", "ISP", "Continent", "Country", "State/Region", "City"]
		// ["IP Address", "Org" "Security.evtx", "15", "Your mother v cute"],
		// ["Sunday 2359", "Security.evtx", "15", "Jerome so cute wow hehe"],
	]);


var reviewResultEvtTableCtx = ctxHelper.genTableWithDivCtx("review-evt-table-div", 
	"review-evt-inner-div", 
	"review-evt-table", 
	'Event Logs Analysis', 
	['RuleTriggered', 'RuleName', 'EventID', 'Timestamp', 'EventRecordID', 'Description', 'IPAddress'],
	[
		['RuleTriggered', 'RuleName', 'EventID', 'Timestamp', 'EventRecordID', 'Description', 'IPAddress']
	]);

var reviewResultsExesTableCtx = ctxHelper.genTableWithDivCtx("review-exes-table-div", 
	"review-exes-inner-div", 
	"review-exes-table", 
	'Executables', 
	["File Name", "MD5", "SHA1", "VirusTotal", "Heuristics Indicators", "Tensorflow Model"],
	[
		["JeromeNoodes", "SHA1", "HashYourDaddy", "30/60", "1/20", "73.5%"],
		["JeromeNoodes1", "SHA1", "HashYourDaddy2", "30/60", "1/20", "73.5%"]
	]);

var reviewResultsDllTableCtx = ctxHelper.genTableWithDivCtx("review-dlls-table-div", 
	"review-dlls-inner-div", 
	"review-dlls-table", 
	'Dynamic Linking Libraries (DLLs)', 
	["File Name", "MD5", "SHA1", "VirusTotal", "Heuristics Indicators", "Tensorflow Model"],
	[
		["JeromeNoodes", "SHA1", "HashYourDaddy", "30/60", "1/20", "73.5%"],
		["JeromeNoodes1","SHA1", "hashYourDaddy2", "30/60", "1/20", "73.5%"]
	]);

var reviewResultsPanelCtx = ['div', {id:'res-review-panel', class: 'col-xl-12 col-md-12 mb-4 results-container'} ,
	['div', {class: 'card'},
		ctxHelper.genCardHeaderCtx("Results",
			"m-0 font-weight-bold text-secondary", 
			"ml-2 fa-1x fas fas fa-chart-bar"),
		['div', {class: 'card-body row'},
			reviewResultsMetaNameCtx,
			reviewResultsMetaImageDateCtx,
			reviewResultsMetaModelCtx,
			reviewResultsMetaManufacturerCtx,

			reviewResultProcessCountCtx,
			reviewResultDomainResultsCtx,
			
			reviewResultMalignFilesCtx,
			reviewResultMalignEventsCtx,

			//Tables
			reviewResultPstreeResultsCtx,
			reviewResultWhoIsResultsCtx,
			reviewResultsExesTableCtx,
			reviewResultsDllTableCtx,
			reviewResultEvtTableCtx
		]	
	]

];


// var evtTempTableCtx = genTableWithDivCtx('evt-results-cont', 'evt-results-sub-cont', 'evt-results-tbl', 'Log Analysis Results', ['h1','h2','h3', 'h4'], [['R1','R2','R3', 'R4'], ['r5','r6','r7', 'r8']]);

var arrTitles = {
	"home": "What do you want to do",
	"case": "Case generation",
	"triage": "Automated RAM Analysis",
	"malware": "Malware Heuristics",
	"event": "Windows Logs Correlator",
	"about": "About Us",
	"technologies": "Technologies Used",
	"review": "Review Triage Results"
};

var aboutIntroDetails = [
	{"Name":"Kevin Tan", "imagePath":"img/kevin.png"},		
	{"Name":"Patrick Kang", "imagePath":"img/patrick.jpeg"},
	{"Name":"Jerome Tan", "imagePath":"img/jerome.jpeg"},
	{"Name":"Lim Long Xian", "imagePath":"img/longxian.jpg"},
	{"Name":"Cleaven Goh", "imagePath":"img/cleaven.jpeg"}				
];

var aboutIntroCtx = ctxHelper.genAboutCardInfoCtx(
		"Introduction",
		'img/enigma.png',
		ctxHelper.genCardBodyCtx('img/enigma.png',[
			ctxHelper.genAboutCardBodyParaCtx("","As technologies advance over the years, the rates of targeted cyber-attacks become even more prevalent. When these attacks happen, many companies do not know when or how their infrastructures are being compromised, and thus are unable to provide a direction for forensic investigations."),
			ctxHelper.genAboutCardBodyParaCtx("","Our solution aims to provide as much information as possible within the forensic bailiwick of an investigation. It consists of a trilogy of modules - a Windows Event Log analyzer, a PE static analyzer, and an IOC detector. Together with an interactive GUI to ease navigation between modules and display our results, we believe that our solution will be extremely valuable in the forensics community.")]
		)
	);


var aboutPeopleCtx = [aboutIntroDetails, function (d) {
	return ['div', {class: 'col-lg-4'},
		['div', {class: 'card position-relative'},
			['div', {class: 'card-header py-3'},
				['h6', {class: 'm-0 font-weight-bold text-primary'}, d.Name]
			],
			['div', {class: 'card-body text-center justify-content-center'},
				['img', {class: 'img-fluid px-3 px-sm-4 mt-3 mb-4 about-info-img', src: d.imagePath}],					
				['div',  {class: 'mb-1'}],
				['p', {class: 'mb-0 small'}]
			]
		]
	]
}];
