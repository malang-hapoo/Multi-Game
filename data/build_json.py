import os
import json

# 📁 기준 폴더 설정
base_dir = os.path.dirname(__file__)
output_file = os.path.join(base_dir, "data_set.json")

result = {}

# 1️⃣ 1차 폴더 (연도)
for year in sorted(os.listdir(base_dir)):
    year_path = os.path.join(base_dir, year)
    if not os.path.isdir(year_path):
        continue

    result[year] = {}

    # 2️⃣ 2차 폴더 (예: 게임 기획 / 게임 제작)
    for folder in sorted(os.listdir(year_path)):
        folder_path = os.path.join(year_path, folder)
        if not os.path.isdir(folder_path):
            continue

        # 3️⃣ 파일 목록 수집 (모든 파일)
        files = sorted([
            f for f in os.listdir(folder_path)
            if os.path.isfile(os.path.join(folder_path, f))
        ])

        result[year][folder] = files

# 4️⃣ JSON 파일로 저장
with open(output_file, "w", encoding="utf-8") as f:
    json.dump(result, f, ensure_ascii=False, indent=2)

print("✅ data_set.json 생성 완료!")
print(f"📄 경로: {output_file}")
