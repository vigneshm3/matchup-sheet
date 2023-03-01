import {parse} from 'csv-parse/browser/esm';

/** @type {import('./$types').PageLoad} */
export async function load() {
    const ornn_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTnIas-XoUx9HaX9-_gpMJfpZMJBhc0NSgjiz369gBmnZ19qXNLL6ym9qB8pfrIKSn4m9ILbt9CyFlx/pub?output=csv';
    // const ornn_url = 'https://www.google.com/'
    // const response = await fetch(ornn_url, {
    //     method: 'GET'
    // });
    // const parser = response.text().pipe()
    // return {
    //     title: "XD",
    //     data: response.text()
    // };
    let matchup_data = [{
        champion_name: '',
        levelling: '',
        runes: '',
        items: '',
        difficulty: '',
        comments: ''
    }];
    const parser = parse({
        delimiter: ',',
        // to: 10
    });
    let counter = 0;
    parser.on('readable', function(){
        const entry = parser.read()
        if(counter >= 7) {
            matchup_data.push({
                champion_name: entry[0],
                levelling: entry[1],
                runes: entry[2],
                items: entry[3],
                difficulty: entry[4],
                comments: entry[5]
            });
            // console.log(counter, entry);
        }
        counter += 1;
    })
    parser.on('error', function(){
        console.log('error');
    })
    parser.on('end', function(){
        console.log('done');
    })

    const response = fetch(ornn_url, {method: 'GET'})
        .then(function(response){
            return response.text();
        })
    const matchup_data_parsed = response.then(function(text){
        matchup_data = [];
        parser.write(text);
        return matchup_data;
    })
    console.log(matchup_data)
    return {
        title: "XD",
        matchup_data: matchup_data_parsed
    };
}

/**
 * ORNN makkro sheet
 * URL: https://docs.google.com/spreadsheets/d/e/2PACX-1vTnIas-XoUx9HaX9-_gpMJfpZMJBhc0NSgjiz369gBmnZ19qXNLL6ym9qB8pfrIKSn4m9ILbt9CyFlx/pub?output=csv
 * Line 8 (0-based) starts matchup info with aatrox
 */