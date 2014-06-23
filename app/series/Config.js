define([],
	function ()
	{
		configOptions = {
			//The appid for the configured application
			appid: "",
			//The web map id
			webmaps: [
			{
				id: "40fb83b037824117a323d14dd52d8670",
				title: "",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false,
				// Hide legend and legend toggle for specific map by setting this option to false
				legendVisible: true,
				// Set to true if you want the legend of this specific map to open when a user selects the tab for this map.
				openLegendOnChange: false
			},{
				id: "ffe596cdd81542dba171f1f2f65321b7",
				title: "",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false,
				// Hide legend and legend toggle for specific map by setting this option to false
				legendVisible: true,
				// Set to true if you want the legend of this specific map to open when a user selects the tab for this map.
				openLegendOnChange: false
			},
			{
				id: "cb052044b12e4f359b03079bf40b5275",
				title: "",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false,
				// Hide legend and legend toggle for specific map by setting this option to false
				legendVisible: true,
				// Set to true if you want the legend of this specific map to open when a user selects the tab for this map.
				openLegendOnChange: false
			},
			{
				id: "d2182638ca324bd2b2730c22dc2f061e",
				title: "",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false,
				// Hide legend and legend toggle for specific map by setting this option to false
				legendVisible: true,
				// Set to true if you want the legend of this specific map to open when a user selects the tab for this map.
				openLegendOnChange: false
			},
			{
				id: "dc8001524da7429da2b7b20fb86988af",
				title: "",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false,
				// Hide legend and legend toggle for specific map by setting this option to false
				legendVisible: true,
				// Set to true if you want the legend of this specific map to open when a user selects the tab for this map.
				openLegendOnChange: false
			},
			{
				id: "ffdeab128d1f4df5945606b0f0482c8c",
				title: "",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false,
				// Hide legend and legend toggle for specific map by setting this option to false
				legendVisible: true,
				// Set to true if you want the legend of this specific map to open when a user selects the tab for this map.
				openLegendOnChange: false
			}
			// To add additional maps to the template, uncomment the below section for
			// each map you would like to add. Webmap titles from ArcGIS Online will
			// be used unless you fill in title attribute.
			//, {
			//
			//	id: "739db23c3f674005a405c68e337f5011",
			//	title: "",
			//	// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
			//	showSingleTimeInstance: false,
			//  // Hide legend and legend toggle for specific map by setting this option to false
			//	legendVisible: true,
			//  // Set to true if you want the legend of this specific map to open when a user selects the tab for this map.
			//	openLegendOnChange: false
			//	},{
			//
			//	id: "739db23c3f674005a405c68e337f5011",
			//	title: "",
			//	// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
			//	showSingleTimeInstance: false,
			//  // Hide legend and legend toggle for specific map by setting this option to false
			//	legendVisible: true,
			//  // Set to true if you want the legend of this specific map to open when a user selects the tab for this map.
			//	openLegendOnChange: false
			//	}
			],
			//Enter a title, if no title is specified, the first webmap's title is used.
			title: "California High Speed Rail (v2)",
			//Enter a subtitle, if no subtitle is specified, the first webmap's subtitle is used.
			subtitle: "Benefits to California",
			// If false, each tab will have a number on it. If true, the first tab will not have a number and the second tab will start counting at 1.
			startCountOnSecondTab: false,
			//Sync maps scale and location
			syncMaps: true,
			//Display geocoder search widget
			geocoderWidget: false,
			// Specify a proxy for custom deployment
			proxyurl: "",
			//specify the url to a geometry service
			geometryserviceurl: "http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer",
			//If the webmap uses Bing Maps data, you will need to provided your Bing Maps Key
			bingmapskey : "",
			//Modify this to point to your sharing service URL if you are using the portal
			sharingurl: "http://www.arcgis.com/sharing/rest/content/items"
		}
	}
);
