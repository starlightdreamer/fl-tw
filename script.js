(function () {
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var featuredGalleryEl = document.getElementById("featured-gallery-grid");
  var miscGalleryEl = document.getElementById("misc-gallery-grid");
  if (!featuredGalleryEl || !miscGalleryEl) {
    return;
  }

  var featuredImageFiles = [
    "a before.jpeg",
    "a during 1.jpeg",
    "a during 2.jpeg",
    "a after working on it.jpeg"
  ];

  var miscImageFiles = [
    "after-repair.jpeg",
    "bench-after-2.jpeg",
    "received_1261280752783359.jpeg",
    "received_1281633664064407.jpeg",
    "received_1323014286485481.jpeg",
    "received_1467764741797439.jpeg",
    "received_1476862604091800.jpeg",
    "received_1479018893777472.jpeg",
    "received_1635990331182631.jpeg",
    "received_1698674604654285.jpeg",
    "received_1717250609633646.jpeg",
    "received_1880754472630310.jpeg",
    "received_1888090985241076.jpeg",
    "received_1921727901932818.jpeg",
    "received_2008236866712288.jpeg",
    "received_2011667686454488.jpeg",
    "received_2018960169054945.jpeg",
    "received_26020768897602581.jpeg",
    "received_4362071714122147.jpeg",
    "received_4376984369252846.jpeg",
    "received_4452963964951437.jpeg",
    "received_840531779094383.jpeg",
    "received_945054861449507.jpeg",
    "received_960127723264116.jpeg",
    "received_960133246514898.jpeg",
    "received_981620534433380.jpeg",
    "repaired-typewriter.jpeg"
  ];

  function getLabel(fileName) {
    var lower = fileName.toLowerCase();
    if (lower === "a before.jpeg") {
      return "Before";
    }
    if (lower === "a after working on it.jpeg") {
      return "After";
    }
    if (lower === "a during 1.jpeg") {
      return "During (1)";
    }
    if (lower === "a during 2.jpeg") {
      return "During (2)";
    }
    if (lower.indexOf("before") !== -1) {
      return "Before";
    }
    if (lower.indexOf("after") !== -1) {
      return "After";
    }
    return "Shop photo";
  }

  function appendGalleryItem(containerEl, fileName, captionText) {
    var label = getLabel(fileName);
    var li = document.createElement("li");
    var figure = document.createElement("figure");
    var img = document.createElement("img");

    figure.className = "gallery-item";
    img.src = "images/" + encodeURI(fileName);
    img.alt = label + " typewriter photo";
    img.width = 640;
    img.height = 480;
    img.loading = "lazy";

    figure.appendChild(img);
    if (captionText) {
      var caption = document.createElement("figcaption");
      caption.textContent = captionText;
      figure.appendChild(caption);
    }
    li.appendChild(figure);
    containerEl.appendChild(li);
  }

  featuredImageFiles.forEach(function (fileName) {
    appendGalleryItem(featuredGalleryEl, fileName, getLabel(fileName));
  });

  miscImageFiles.forEach(function (fileName) {
    appendGalleryItem(miscGalleryEl, fileName, "");
  });
})();
