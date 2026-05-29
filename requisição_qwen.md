import os
from openai import OpenAI

client = OpenAI(
    api_key=os.getenv("ATLASCLOUD_API_KEY"),
    base_url="https://api.atlascloud.ai/v1"
)

response = client.chat.completions.create(
    model="qwen/qwen3.6-plus",
    messages=[
    {
        "role": "user",
        "content": "what is difference between http and https"
    }
],
    max_tokens=1024,
    temperature=0.7
)

print(response.choices[0].message.content)

***********

https://www.atlascloud.ai/pt/models/qwen/qwen3.6-plus