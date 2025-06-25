Overview
This dataset provides detailed technical and operational specifications for a comprehensive collection of commercial aircraft models and their significant variations. Compiled to support analysis, research, and machine learning applications in aviation, the dataset offers a structured view of aircraft characteristics ranging from physical dimensions and performance metrics to engine details and operational information.

Scope
The dataset includes specifications for over 130 distinct commercial aircraft models and their variations, covering prominent manufacturers across different eras of aviation.

Aircraft included in the dataset:

Airbus A220-100, Airbus A220-300, Airbus A300B2-100, Airbus A300B4-100, Airbus A300-600, Airbus A310-200, Airbus A310-300, Airbus A318, Airbus A319, Airbus A319neo, Airbus A320, Airbus A320neo, Airbus A321-100, Airbus A321-200, Airbus A321LR, Airbus A321neo, Airbus A321XLR, Airbus A330-200F, Airbus A330-300, Airbus A330-800neo, Airbus A330-900neo, Airbus A340-200, Airbus A340-300, Airbus A340-500, Airbus A340-600, Airbus A350-800, Airbus A350-900, Airbus A350-1000, Airbus A380-800, Airbus A380-900, Airbus A380F, Airbus BelugaXL, Airbus BelugaST
Boeing 247D, Boeing 307 Stratoliner, Boeing 707-138, Boeing 707-320, Boeing 707-20B, Boeing 707-100B, Boeing 717-100, Boeing 717-200, Boeing 727-100, Boeing 727-200, Boeing 737-100, Boeing 737-200, Boeing 737-300, Boeing 737-400, Boeing 737-500, Boeing 737-600, Boeing 737-700, Boeing 737-800, Boeing 737-900, Boeing 737 MAX, Boeing 747-100, Boeing 747-200, Boeing 747-300, Boeing 747-400, Boeing 747-400F, Boeing 747-400D, Boeing 747-400ER, Boeing 747-8, Boeing 757-200, Boeing 757-200F, Boeing 757-300, Boeing 767-200, Boeing 757-200ER, Boeing 767-300, Boeing 767-300ER, Boeing 767-400, Boeing 767-400ER, Boeing 777-200, Boeing 777-200ER, Boeing 777-200LR, Boeing 777-300, Boeing 777-300ER, Boeing 777-200F, Boeing 777-9, Boeing 787-8 Dreamliner, Boeing 787-9 Dreamliner
DC-8-10, DC-8-20, DC-8-30, DC-8-40, DC-8-50, DC-8 Super 60, DC-8-70, DC-9-10, DC-9-20, DC-9-30, DC-9-40, DC-9-50, DC-10-10, DC-10-15, DC-10-30, DC-10-40, MD-81, MD-82, MD-83, MD-87, MD-88, MD-90-30, MD-90-30ER, MD-11, MD-11F, MD-11C, MD-11CF, MD-11ER
ATR-42-300, ATR-42-500, ATR-42-600, ATR-42-600S, ATR-72-200, ATR-72-210, ATR-72-500, ATR-72-600
Data Structure
The dataset is structured as a collection where each key represents the name of an aircraft model (e.g., "Airbus A220-100"). The value associated with each key is an object containing several nested categories that group related features.



Here is how one sample data might look like in the JSON based dataset
"DC-10-40": {
    "General Information": {
        "Manufacturer": "McDonnell Douglas",
        "Family": "DC-10",
        "First Flight": "August 29, 1970",
        "Model Build": "42",
        "Entered Service": "1973 with Northwest Orient Airlines",
        "Type": "Wide-body jet airliner",
        "Engine Type": "High-bypass turbofan",
        "number of engines": "3",
        "Price Tag": "US$20 million (1972)",
        "Fly range category": "Long range",
        "seat config": [
            "2-4-2"
        ],
        "aircraft_image": [
            "https://imgproc.airliners.net/photos/airliners/5/0/8/0167805.jpg?v=v40",
            "https://th.bing.com/th/id/R.ee270f42f175045c60ae6799c7045536?rik=%2bZIAHapZDRZxDg&pid=ImgRaw&r=0"
        ]
    },
    "Dimensions": {
        "Length": "55.5 m",
        "Wingspan": "50.4 m",
        "Cabin Length": "36.7 m",
        "Fuselage Max Diameter": "6 m",
        "Max Cabin Width": "5.7 m",
        "Aspect ratio": 6.9,
        "Wing area": "367.7 m^3"
    },
    "Weights": {
        "Max Landing Weight": "192 tons",
        "Empty Weight": "128 tons",
        "Max Takeoff Weight": "263 tons"
    },
    "Performance": {
        "Fuel Capacity": 138700,
        "Range": "5,100 nautical miles",
        "Flight Ceiling": "42,000 feet",
        "Takeoff Distance": "3,000 m",
        "Landing Distance": "1,800 m",
        "Passenger Capacity": {
            "Max": "380",
            "Typical": "270"
        },
        "Cargo Capacity": "16,000 gallons",
        "Avionics": {
            "Common_suite": "Honeywell",
            "FMS": "Yes",
            "EFIS": "Yes",
            "AFCS": "Yes",
            "TAWS": "Yes",
            "HUD": "No"
        }
    },
    "Speed": {
        "Cruise Speed": {
            "Mach": "0.82",
            "Knots": "530 knots"
        },
        "Max Speed": {
            "Mach": "0.89",
            "Knots": "590 knots"
        },
        "V2 speed": "149 knots",
        "Stall speed": "120 knots"
    },
    "Engines": {
        "Pratt & Whitney JT9D-20": {
            "Manufacturer": "Pratt & Whitney",
            "Model": "JT9D-20",
            "Thrust": "49,400 lbf",
            "Bypass ratio": "5.0:1",
            "Fan stage": "Single-stage fan",
            "Low-pressure compressor stages": "3",
            "High-pressure compressor stages": "11",
            "High-pressure turbine stages": "2",
            "Low-pressure turbine stages": "4",
            "Climb rate": 2000,
            "Descend rate": 2000,
            "Cruise climb rate": 1500,
            "Landing descend rate": 1500,
            "Fan blade diameter": "93 inches",
            "Fuel type": "Jet-A, Aviation kerosene",
            "Pressure ratio": "23:1"
        },
        "Pratt & Whitney JT9D-59A": {
            "Manufacturer": "Pratt & Whitney",
            "Model": "JT9D-59A",
            "Thrust": "53,000 lbf",
            "Bypass ratio": "5.0:1",
            "Fan stage": "Single-stage fan",
            "Low-pressure compressor stages": "3",
            "High-pressure compressor stages": "11",
            "High-pressure turbine stages": "2",
            "Low-pressure turbine stages": "4",
            "Climb rate": 2000,
            "Descend rate": 2000,
            "Cruise climb rate": 1500,
            "Landing descend rate": 1500,
            "Fan blade diameter": "93 inches",
            "Fuel type": "Jet-A, Aviation kerosene",
            "Pressure ratio": "23:1"
        }
    },
    "Other Details": {
        "Noise Levels": {
            "Takeoff": "95 dB",
            "Landing": "90 dB",
            "Cruise": "85 dB"
        },
        "operation_cost": "$10 million",
        "certification_standards": [
            "FAA",
            "EASA"
        ],
        "Body Type": "Wide-body",
        "Number of Decks": "1",
        "Materials": {
            "Fuselage": "Aluminum alloy",
            "Wings": "Aluminum alloy"
        },
        "Commercial Operators": [
            "Northwest Orient Airlines",
            "Japan Airlines"
        ],
        "Flaps system": "Triple-slotted",
        "Number of flap stages": "5",
        "Maximum flap angle": "50 degrees",
        "Actuation system": "Hydraulic",
        "Flaps material": "Aluminum"
    }
},

Feature Categories and Examples
Each aircraft entry contains data categorized as follows:

General Information
Basic identification and background.
Examples: Manufacturer, Family, First Flight, Entered Service, Type, Engine Type, Fly range category, seat config (list), number of engines, price, aircraft_image (list of URLs).
Dimensions
Physical size specifications.
Examples: Length, Wingspan, Cabin Length, Fuselage Max Diameter, Max Cabin Width, Aspect ratio, Wing area.
Weights
Key weight metrics.
Examples: Max Landing Weight, Empty Weight, Max Takeoff Weight.
Performance
Operational capabilities and capacities.
Examples: Fuel Capacity, Range, Flight Ceiling, Takeoff Distance, Landing Distance, Passenger Capacity (nested object with Max and Typical), Cargo Capacity, Avionics (nested object with specific systems like FMS, EFIS, AFCS, TAWS, HUD, and Common Suite).
Speed
Various speed metrics.
Examples: Cruise Speed (nested object with Mach and Knots), Max Speed (nested object with Mach and Knots), V2 speed, Stall speed.
Engines
Detailed information about the engine(s) used by the aircraft model. This section contains nested objects for each specific engine variant, providing granular technical specs.
Examples: (for each engine model like PW1500G, JT9D-59A/B, CF6-50C2, etc.) Manufacturer, Model, Thrust, Bypass ratio, Fan stage, Low-pressure compressor stages, High-pressure compressor stages, High-pressure turbine stages, Low-pressure turbine stages, Climb rate, Descend rate, Cruise climb rate, Landing descend rate, Fan blade diameter, Fuel type, Pressure ratio, engine_width, engine_length, fan_diameter, num_fan_blades, max_operating_temp.
Other Details
Miscellaneous operational and structural information.
Examples: Noise Levels (nested object with Takeoff, Landing, Cruise), Operation Cost, Certification Standards (list), Body Type, Number of Decks, Materials (nested objects for Fuselage and Wings with Material), Commercial Operators (list), Flaps system, Number of flap stages, Maximum flap angle, Actuation system, Flaps material.


