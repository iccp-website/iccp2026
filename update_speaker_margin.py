#!/usr/bin/env python3
"""
Script to update all speaker subtitle margins in talks.html
Changes margin-bottom from 1rem to 2rem for <p class="subtitle is-6"> elements
"""

import re

def update_subtitle_margin(html_content):
    # Replace only the specific style
    return re.sub(
        r'(<p class="subtitle is-6" style="margin-bottom: )1rem(;">)',
        r'\g<1>2rem\g<2>',
        html_content
    )

def main():
    with open('pages/talks.html', 'r', encoding='utf-8') as f:
        content = f.read()
    updated = update_subtitle_margin(content)
    with open('pages/talks.html', 'w', encoding='utf-8') as f:
        f.write(updated)
    print("Updated all speaker subtitle margins to 2rem.")

if __name__ == "__main__":
    main() 