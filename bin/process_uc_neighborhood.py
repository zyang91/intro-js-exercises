#!/usr/bin/env python

import json
from os.path import abspath, dirname

root = dirname(dirname(abspath(__file__)))
neighborhoods_file = f'{root}/data/Neighborhoods_Philadelphia.geojson'

with open(neighborhoods_file) as infile:
    neighborhoods = json.load(infile)
    for feature in neighborhoods['features']:
        if feature['properties']['name'] == 'UNIVERSITY_CITY':
            uc = feature['geometry']
            break
    else:
        raise Exception('University City not found.')

print(json.dumps(uc, indent=2))