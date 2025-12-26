# 📸 Photos Section - Quick Reference Guide

## How to Add Your Photos

Photos sections appear on **two pages**:
1. **Letter Page** - Between the letter card and video section
2. **Chat Page** - Below the chat interface

---

## Letter Page Photos

### Photo Placeholders Location

In `birthday_website.tsx`, find the section starting with:
```tsx
{/* Photos Grid Section */}
<div className={`photos-grid-section ${isLetterVisible ? 'visible' : ''}`}>
```

### Current Letter Page Placeholders:

1. `/photo1.jpg` - "First memory together"
2. `/photo2.jpg` - "Happy times"
3. `/photo3.jpg` - "Unforgettable moments"
4. `/photo4.jpg` - "Adventures together"
5. `/photo5.jpg` - "Cherished friendship"
6. `/photo6.jpg` - "Forever memories"

---

## Chat Page Photos

### Photo Placeholders Location

In `birthday_website.tsx`, find the section starting with:
```tsx
{/* Photos Section on Chat Page */}
<div className="chat-photos-section">
```

### Current Chat Page Placeholders:

1. `/chat-photo1.jpg` - "Laughing together"
2. `/chat-photo2.jpg` - "Best moments"
3. `/chat-photo3.jpg` - "Fun times"
4. `/chat-photo4.jpg` - "Great adventures"
5. `/chat-photo5.jpg` - "Sweet memories"
6. `/chat-photo6.jpg` - "Forever friends"

---

## Replace Image Sources

Currently shows 6 photos. Each photo card looks like:

```tsx
<div className="photo-card">
  <div className="photo-placeholder">
    <img src="/photo1.jpg" alt="Memory 1" />
  </div>
  <p className="photo-caption">First memory together</p>
</div>
```

### Steps to Add Your Photos:

1. **Add photos to `/workspaces/Birthday/public/` folder**
   - Name them: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc.
   - Or use any names you prefer

2. **Update the src attributes:**
   - Change `/photo1.jpg` to your actual photo filename
   - Example: `/our-first-day.jpg`

3. **Update captions:**
   - Change `"First memory together"` to your actual memory description
   - Keep it short and sweet (3-8 words)

4. **Update alt text:**
   - Change `"Memory 1"` to describe the photo for accessibility

### Photo Requirements:

- **Format:** JPG, PNG, or WebP
- **Recommended size:** 800x600px or similar 4:3 aspect ratio
- **File size:** Keep under 500KB per photo for fast loading
- **Faces:** Photos will be centered, so make sure faces aren't at edges

### Layout:

- **Desktop:** 3 photos per row
- **Tablet:** 2 photos per row
- **Mobile:** 1 photo per column

### Example Replacement:

**Before:**
```tsx
<img src="/photo1.jpg" alt="Memory 1" />
<p className="photo-caption">First memory together</p>
```

**After:**
```tsx
<img src="/birthday-party-2023.jpg" alt="Birthday celebration" />
<p className="photo-caption">That amazing birthday party</p>
```

### To Add More Photos:

Just copy-paste another photo card block:

```tsx
<div className="photo-card">
  <div className="photo-placeholder">
    <img src="/photo7.jpg" alt="Memory 7" />
  </div>
  <p className="photo-caption">Another great memory</p>
</div>
```

### To Remove Photos:

Simply delete the entire `<div className="photo-card">...</div>` block you don't need.

---

## Current Photo Placeholders:

### Letter Page:
1. `/photo1.jpg` - "First memory together"
2. `/photo2.jpg` - "Happy times"
3. `/photo3.jpg` - "Unforgettable moments"
4. `/photo4.jpg` - "Adventures together"
5. `/photo5.jpg` - "Cherished friendship"
6. `/photo6.jpg` - "Forever memories"

### Chat Page:
1. `/chat-photo1.jpg` - "Laughing together"
2. `/chat-photo2.jpg` - "Best moments"
3. `/chat-photo3.jpg` - "Fun times"
4. `/chat-photo4.jpg` - "Great adventures"
5. `/chat-photo5.jpg` - "Sweet memories"
6. `/chat-photo6.jpg` - "Forever friends"

**Note:** If photos are missing, a camera emoji (📷) will show as a placeholder.
