# csv_to_json.py
import csv
import json
import os

# --- 請修改這裡的路徑 ---
# 輸入 CSV 檔案的路徑
csv_file_path = '/Users/rogerchen/Documents/10. 卡比樂活/20250217/public/NumerologyCalculator.csv'
# 輸出 JSON 檔案的路徑 (建議放在 src/data/ 目錄下)
json_file_path = '/Users/rogerchen/Documents/10. 卡比樂活/20250217/src/data/NumerologyCalculator.json'
# --- 路徑修改結束 ---

# 確保輸出的目錄存在
output_dir = os.path.dirname(json_file_path)
if not os.path.exists(output_dir):
    os.makedirs(output_dir)
    print(f"已建立目錄: {output_dir}")

data_list = []

try:
    # 使用 'utf-8-sig' 來處理可能存在的 BOM (Byte Order Mark)
    with open(csv_file_path, mode='r', encoding='utf-8-sig', newline='') as csvfile:
        # 使用 DictReader 可以方便地透過欄位名稱存取資料
        reader = csv.DictReader(csvfile)

        # 檢查必要的欄位是否存在
        required_headers = ['靈數組合KEY', '完整命定解說', '命定水晶搭配建議', '手鍊設計語言']
        if not all(header in reader.fieldnames for header in required_headers):
            missing = [h for h in required_headers if h not in reader.fieldnames]
            raise ValueError(f"CSV 檔案缺少必要的欄位: {', '.join(missing)}")

        print("開始讀取 CSV 檔案...")
        for row in reader:
            # 從 '靈數組合KEY' 欄位直接取得 key
            key = row.get('靈數組合KEY', '').strip()
            explanation = row.get('完整命定解說', '').strip()
            crystal_suggestion = row.get('命定水晶搭配建議', '').strip()
            design_language = row.get('手鍊設計語言', '').strip()

            # 確保 key 不為空
            if not key:
                print(f"警告：跳過缺少 '靈數組合KEY' 的行: {row}")
                continue

            # 建立 JSON 物件
            data_object = {
                'key': key,
                'explanation': explanation,
                'crystalSuggestion': crystal_suggestion,
                'designLanguage': design_language
            }
            data_list.append(data_object)

    print(f"成功讀取 {len(data_list)} 筆資料。")

    print(f"開始寫入 JSON 檔案: {json_file_path}")
    # 將資料寫入 JSON 檔案
    with open(json_file_path, mode='w', encoding='utf-8') as jsonfile:
        # indent=2 讓 JSON 檔案格式化，方便閱讀
        # ensure_ascii=False 確保中文字符不會被轉換成 ASCII escape sequences
        json.dump(data_list, jsonfile, indent=2, ensure_ascii=False)

    print("轉換完成！JSON 檔案已成功儲存。")

except FileNotFoundError:
    print(f"錯誤：找不到 CSV 檔案 '{csv_file_path}'")
except ValueError as ve:
    print(f"錯誤：{ve}")
except Exception as e:
    print(f"處理過程中發生錯誤：{e}")
