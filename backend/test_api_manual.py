#!/usr/bin/env python3
"""Manual API testing script for marketing agency endpoints."""
import requests
from datetime import datetime

BASE_URL = "http://localhost:8001/api"

def test_contacts():
    """Test contact form endpoints."""
    print("\n=== Testing Contact Form Endpoints ===")

    # Create contact
    contact_data = {
        "name": "John Doe",
        "email": "john@example.com"
    }

    print(f"POST /api/contacts with data: {contact_data}")
    response = requests.post(f"{BASE_URL}/contacts", json=contact_data)
    print(f"Status: {response.status_code}")

    if response.status_code == 200:
        data = response.json()
        print(f"✓ Contact created: ID={data['id']}, Name={data['name']}, Email={data['email']}")
        contact_id = data['id']
    else:
        print(f"✗ Failed: {response.text}")
        return False

    # Get contacts
    print("\nGET /api/contacts")
    response = requests.get(f"{BASE_URL}/contacts")
    print(f"Status: {response.status_code}")

    if response.status_code == 200:
        contacts = response.json()
        print(f"✓ Retrieved {len(contacts)} contacts")
        if contacts:
            print(f"  Latest: {contacts[0]['name']} ({contacts[0]['email']})")
    else:
        print(f"✗ Failed: {response.text}")
        return False

    return True

def test_blog():
    """Test blog endpoints."""
    print("\n=== Testing Blog Endpoints ===")

    # Create blog post
    blog_data = {
        "title": "5 Marketing Strategies That Actually Work",
        "content": "In today's competitive landscape, effective marketing requires a strategic approach...",
        "author": "Marketing Team",
        "category": "Strategy",
        "image_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0"
    }

    print(f"POST /api/blog with data: {blog_data['title']}")
    response = requests.post(f"{BASE_URL}/blog", json=blog_data)
    print(f"Status: {response.status_code}")

    if response.status_code == 200:
        data = response.json()
        print(f"✓ Blog post created: ID={data['id']}, Title={data['title']}")
        post_id = data['id']
    else:
        print(f"✗ Failed: {response.text}")
        return False

    # Get all blog posts
    print("\nGET /api/blog")
    response = requests.get(f"{BASE_URL}/blog")
    print(f"Status: {response.status_code}")

    if response.status_code == 200:
        posts = response.json()
        print(f"✓ Retrieved {len(posts)} blog posts")
        if posts:
            print(f"  Latest: {posts[0]['title']} by {posts[0]['author']}")
    else:
        print(f"✗ Failed: {response.text}")
        return False

    # Get specific blog post
    print(f"\nGET /api/blog/{post_id}")
    response = requests.get(f"{BASE_URL}/blog/{post_id}")
    print(f"Status: {response.status_code}")

    if response.status_code == 200:
        post = response.json()
        print(f"✓ Retrieved blog post: {post['title']}")
    else:
        print(f"✗ Failed: {response.text}")
        return False

    return True

def main():
    """Run all API tests."""
    print("Starting API Tests...")
    print(f"Base URL: {BASE_URL}")
    print(f"Time: {datetime.now()}")

    results = {
        "contacts": test_contacts(),
        "blog": test_blog()
    }

    print("\n" + "="*50)
    print("TEST SUMMARY")
    print("="*50)
    for endpoint, passed in results.items():
        status = "✓ PASSED" if passed else "✗ FAILED"
        print(f"{endpoint.upper()}: {status}")

    all_passed = all(results.values())
    print("\n" + ("="*50))
    if all_passed:
        print("✓ ALL TESTS PASSED")
    else:
        print("✗ SOME TESTS FAILED")
    print("="*50)

    return all_passed

if __name__ == "__main__":
    main()
