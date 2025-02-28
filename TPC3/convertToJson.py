import csv 
import json

def convert_csv_to_json(csv_file,json_file):
    # create the list for the content of the CSV file
    data = []
    
    # Open the CSV file
    with open(csv_file, mode = 'r',encoding='utf-8') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter = ';')
        
        # No need to skip a header line, as the first line of the CSV already contains info
        for line in csv_reader:
            # Create a dictionary for each line
            entry = {
                "id": line[0].strip(), # remove leading and trailing whitespaces
                "nome" : line[1].strip(),
                "gitLink": line[2].strip()
            }
            # Append the dictionary to the list
            data.append(entry)
        
    # Open the JSON file
    with open(json_file, mode='w', encoding='utf-8') as json_file:
        # Write the data to the JSON file
        json.dump({"alunos": data}, json_file, ensure_ascii=False, indent=2)
        
def main():
    # Define the path to the CSV file
    csv_file = 'alunos.csv'
    json_file = 'alunosDB.json'
    
    convert_csv_to_json(csv_file,json_file)
    print(f'CSV file {csv_file} has been converted to JSON file {json_file}')
    
if __name__ == '__main__':
    main()
