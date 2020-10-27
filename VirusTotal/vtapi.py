from virus_total_apis import PrivateApi as VirusTotalPrivateApi
import csv
import json
import time

# Request rate = 4 per minute
# Daily quota = 1000 requests per day
# Monthly quota = 30000 requests per month
# normal_api_key = 'd265749382155a9250c2b1f2bc926eb6d7cfa0bd5c5ce00068225b516415cb67'

# Request rate = 1000 per minute
# Daily quota = 20000 requests per day
# Monthly quota = 600000 requests per month
# academic_api_key = 'dab678a43cd131a2ed0c91d0d26cc9aa3f2c69cee5198325bf4a1a29bf44c4f7'
def virus_total(hash):
    API_KEY = 'dab678a43cd131a2ed0c91d0d26cc9aa3f2c69cee5198325bf4a1a29bf44c4f7'
    vt = VirusTotalPrivateApi(API_KEY)
    response = vt.get_file_report(hash, allinfo=1)
    return response

def main():
    with open(r'C://Users//damie//Desktop//Y2T1//ICT2202_Digital_Forensics//Assignment//hash.csv') as hash_file:
        hash_csv = csv.reader(hash_file)
        file_name = []
        md5_hash = []
        sha1_hash = []
        hash_scanned = []
        for row in hash_csv:
            if (len(row) > 1):
                # file_path, file_name, md5_hash, sha1_hash = row
                file_path = row[0]
                file_name.append(row[1])
                md5_hash.append(row[2])
                md5_filtered = list(filter(lambda x: x != "", md5_hash))
                sha1_hash.append(row[3])
                sha1_filtered = list(filter(lambda x: x != "", sha1_hash))

        try:
            for hash in md5_filtered:
                results = virus_total(hash)
                response = int(results.get('response_code'))
                print(results)
                if response == 0:
                    print(hash + ' cannot be found in VirusTotal Database')
                elif response == 1:
                    positiveHits = int(results.get('positives'))
                    if positiveHits == 0:
                        print(hash + ' is not malicious\n')
                    else:
                        print(hash + ' is malicious. Hit count: ' + str(positiveHits) + '\n')
                time.sleep(2)

        except KeyError:
            print('Index not found')
            exit(1)

if __name__ == "__main__":
    main()