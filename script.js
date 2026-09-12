/**
 * PERLA ELITE - LUXURY CLOTHING RENTAL & BOUTIQUE
 * Script for interactive components, catalog filtering, quick view modal & booking integration
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Product Catalog Database ---
  const products = [
    {
      id: 'pe-01',
      name: 'Aura of Swan - Đầm Dạ Hội Kim Sa Hoàng Gia',
      category: 'gala',
      categoryName: 'Váy Thiết Kế Dạ Hội',
      rentalPrice: '650.000đ',
      buyPrice: '3.800.000đ',
      duration: '3 ngày',
      image: 'assets/images/hero_banner.jpg',
      badge: 'Bestseller',
      sizes: ['XS', 'S', 'M', 'May đo theo số đo'],
      fabric: 'Voan tơ dệt kim sa ánh vàng hồng nhập khẩu cao cấp',
      features: [
        'Đính kết hạt cườm & pha lê thủ công dọc thân váy',
        'Cổ V thanh thoát, ôm trọn eo thon quyến rũ',
        'Đuôi váy xòe quét sàn lộng lẫy chuẩn thảm đỏ',
        'Miễn phí fitting chỉnh sửa theo số đo 3 vòng'
      ],
      desc: 'Thiết kế biểu tượng lấy cảm hứng từ đôi cánh thiên nga kiêu hãnh của Perla Elite. Từng dải kim sa vàng hồng được đính kết thủ công tỉ mỉ, bắt trọn từng tia sáng lấp lánh trong đêm dạ tiệc, mang lại thần thái vương giả và quý phái khó cưỡng.'
    },
    {
      id: 'pe-02',
      name: 'Princess of Perla - Váy Dạ Hội Tùng Xòe Công Chúa',
      category: 'gala',
      categoryName: 'Váy Thiết Kế Dạ Hội',
      rentalPrice: '580.000đ',
      buyPrice: '3.500.000đ',
      duration: '3 ngày',
      image: 'assets/images/dress_gala.jpg',
      badge: 'Mẫu Mới',
      sizes: ['S', 'M', 'L'],
      fabric: 'Ren thêu nổi hoa trà Pháp & Tulle xếp lớp bồng bềnh',
      features: [
        'Thiết kế cúp ngực trễ vai tôn trọn xương quai xanh',
        'Dáng tùng xòe đa tầng hoàng gia, hack chiều cao',
        'Lớp lót lụa mềm êm ái, thoáng mát suốt buổi tiệc',
        'Tặng kèm mượn tùng phồng cao cấp'
      ],
      desc: 'Vẻ đẹp lãng mạn ngọt ngào biến bạn thành nàng công chúa bước ra từ chuyện cổ tích. Tông màu champagne ngọc trai trang nhã làm bừng sáng làn da Á Đông, hoàn hảo cho tiệc cưới, sinh nhật và prom sang trọng.'
    },
    {
      id: 'pe-03',
      name: 'Swan Reverie - Váy Tốt Nghiệp Lụa Satin Tay Bồng',
      category: 'prom',
      categoryName: 'Váy Tốt Nghiệp & Prom',
      rentalPrice: '350.000đ',
      buyPrice: '1.850.000đ',
      duration: '3 ngày',
      image: 'assets/images/dress_prom.jpg',
      badge: 'Hot Kỷ Yếu',
      sizes: ['XS', 'S', 'M', 'L'],
      fabric: 'Lụa Satin Hàn Quốc dày dặn & Tơ Organza bồng',
      features: [
        'Viền cổ ngọc trai thủ công tinh tế, thanh lịch',
        'Tay áo bồng phối tơ organza che khuyết điểm bắp tay',
        'Form chữ A trẻ trung, năng động nhưng cực kỳ nữ tính',
        'Có túi hai bên hông tiện lợi chụp hình'
      ],
      desc: 'Mẫu váy sinh ra cho ngày lễ tốt nghiệp và những buổi tiệc mừng trang trọng của tuổi thanh xuân. Màu trắng kem tinh khôi, dáng váy thanh lịch giúp nàng nổi bật rạng ngời bên bó hoa tươi và tấm bằng khen danh giá.'
    },
    {
      id: 'pe-04',
      name: 'Ngọc Lan Thanh Sắc - Áo Dài Cách Tân Thêu Hoa Nàng Thơ',
      category: 'aodai',
      categoryName: 'Áo Dài Nàng Thơ',
      rentalPrice: '380.000đ',
      buyPrice: '2.200.000đ',
      duration: '3 ngày',
      image: 'assets/images/dress_aodai.jpg',
      badge: 'Đặc Sắc',
      sizes: ['S', 'M', 'L', 'XL'],
      fabric: 'Tơ tằm cao cấp dệt 4 tà & Lụa tơ sống mềm mịn',
      features: [
        'Họa tiết hoa mẫu đơn thêu tay thủ công sắc sảo',
        'Cổ tròn trụ 2cm đính viền ngọc trai truyền thống pha hiện đại',
        'Tay áo bồng tơ dún tạo nét e ấp dịu dàng',
        'Kèm quần lụa suông rộng ống đứng cùng tông'
      ],
      desc: 'Nét duyên dáng đằm thắm của người phụ nữ Tràng An hòa quyện cùng hơi thở thời trang cách tân đương đại. Tông hồng phấn pastel nhẹ như mây, là lựa chọn số 1 cho các dịp chụp ảnh kỷ yếu, lễ Tết và dự tiệc truyền thống.'
    },
    {
      id: 'pe-05',
      name: 'Perla Royal Pearl - Bộ Clutch & Phụ Kiện Dạ Hội Ánh Kim',
      category: 'accessories',
      categoryName: 'Phụ Kiện Cao Cấp',
      rentalPrice: '120.000đ',
      buyPrice: '850.000đ',
      duration: '3 ngày',
      image: 'assets/images/accessories.jpg',
      badge: 'Combo Ưu Đãi',
      sizes: ['Freesize'],
      fabric: 'Khung kim loại mạ vàng hồng, ngọc trai nhân tạo & đá pha lê',
      features: [
        'Túi clutch đính kết ngọc trai toàn phần sang trọng',
        'Khuyên tai giọt nước đính đá pha lê bắt sáng lung linh',
        'Cài tóc thiên nga pha lê đồng bộ logo Perla Elite',
        'Giảm 50% phí thuê khi thuê kèm bất kỳ mẫu váy nào'
      ],
      desc: 'Set phụ kiện hoàn thiện diện mạo quý cô thảm đỏ. Từng chi tiết từ clutch cầm tay đến khuyên tai và cài áo đều được lựa chọn đồng điệu với tone màu Rose Gold & Pearl của Perla Elite.'
    },
    {
      id: 'pe-06',
      name: 'Hồng Hạc Thanh Dao - Áo Dài Thêu Sen Cổ Điển',
      category: 'aodai',
      categoryName: 'Áo Dài Nàng Thơ',
      rentalPrice: '390.000đ',
      buyPrice: '2.400.000đ',
      duration: '3 ngày',
      image: 'assets/images/feedback_3.jpg',
      badge: 'Thủ Công',
      sizes: ['S', 'M', 'L'],
      fabric: 'Lụa tơ tằm Bảo Lộc thượng hạng',
      features: [
        'Họa tiết đóa sen hạ thêu tay truyền thống',
        'Form chiết eo tôn đường cong tự nhiên mềm mại',
        'Độ rủ tà áo thướt tha uyển chuyển theo từng bước chân',
        'Khử khuẩn & ủi ép nhiệt thơm phức trước khi bàn giao'
      ],
      desc: 'Vẻ đẹp thanh tao, thuần khiết như đóa sen sớm mai giữa lòng Hà Nội. Mẫu áo dài được yêu thích đặc biệt bởi các cô dâu, phù dâu và các bạn trẻ chụp ảnh nghệ thuật tại Văn Miếu, Hoàng Thành Thăng Long.'
    }
  ];

  // --- Sticky Navigation Bar & Active Links ---
  const header = document.querySelector('.header');
  const navLinks = document.querySelectorAll('.nav-link, .drawer-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // ScrollSpy
    let current = '';
    const scrollPos = window.pageYOffset + 120;
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // --- Mobile Drawer Toggle ---
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const drawerBackdrop = document.querySelector('.drawer-backdrop');
  const drawerClose = document.querySelector('.drawer-close');

  const openDrawer = () => {
    mobileDrawer.classList.add('open');
    drawerBackdrop.classList.add('active');
    mobileToggle.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('active');
    mobileToggle.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  document.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // --- Render Product Catalog ---
  const productGrid = document.getElementById('product-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function renderProducts(filter = 'all') {
    if (!productGrid) return;
    productGrid.innerHTML = '';

    const filtered = filter === 'all' 
      ? products 
      : products.filter(p => p.category === filter);

    filtered.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.setAttribute('data-id', p.id);

      card.innerHTML = `
        <div class="product-image-wrap">
          <img src="${p.image}" alt="${p.name}" loading="lazy" />
          <span class="product-badge ${p.badge.includes('Hot') || p.badge.includes('Bestseller') ? 'hot' : ''}">${p.badge}</span>
          <button class="product-quick-btn" onclick="openProductModal('${p.id}')">
            <i class="fas fa-eye"></i> Xem Chi Tiết
          </button>
        </div>
        <div class="product-info">
          <span class="product-category">${p.categoryName}</span>
          <h4 class="product-name">${p.name}</h4>
          <div class="product-details-pills">
            ${p.sizes.map(s => `<span class="pill">${s}</span>`).join('')}
          </div>
          <div class="product-pricing">
            <div class="rental-price">
              <span class="price-label">Giá thuê (${p.duration})</span>
              <span class="price-value">${p.rentalPrice}</span>
            </div>
            <div class="buy-price">
              <span class="price-label">Giá may bán</span>
              <div>${p.buyPrice}</div>
            </div>
          </div>
          <div class="product-actions">
            <button class="btn btn-primary btn-sm" onclick="openBookingWithProduct('${p.name}')">
              <i class="fas fa-calendar-check"></i> Đặt Thuê
            </button>
            <a href="https://m.me/61592329033629" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
              <i class="fab fa-facebook-messenger"></i> Chat FB
            </a>
          </div>
        </div>
      `;
      productGrid.appendChild(card);
    });
  }

  // Filter Buttons Click
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter');
      renderProducts(filterValue);
    });
  });

  // Initial render
  renderProducts('all');

  // --- Quick View Modal Logic ---
  const productModal = document.getElementById('product-modal');
  const modalClose = document.getElementById('modal-close');

  window.openProductModal = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !productModal) return;

    document.getElementById('modal-img').src = product.image;
    document.getElementById('modal-img').alt = product.name;
    document.getElementById('modal-cat').textContent = product.categoryName;
    document.getElementById('modal-title').textContent = product.name;
    document.getElementById('modal-rental-price').textContent = `${product.rentalPrice} / ${product.duration}`;
    document.getElementById('modal-buy-price').textContent = product.buyPrice;
    document.getElementById('modal-desc').textContent = product.desc;
    document.getElementById('modal-fabric').textContent = product.fabric;
    document.getElementById('modal-sizes').textContent = product.sizes.join(', ');

    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = product.features.map(f => `<li><i class="fas fa-check text-rose"></i> ${f}</li>`).join('');

    // Update messenger / zalo button with product name
    const zaloMsg = encodeURIComponent(`Xin chào Perla Elite, mình muốn được tư vấn và đặt thuê mẫu "${product.name}"`);
    document.getElementById('modal-zalo-btn').href = `https://zalo.me/0812371611?text=${zaloMsg}`;
    document.getElementById('modal-book-btn').onclick = () => {
      closeProductModal();
      openBookingWithProduct(product.name);
    };

    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function closeProductModal() {
    if (productModal) {
      productModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (modalClose) modalClose.addEventListener('click', closeProductModal);
  if (productModal) {
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) closeProductModal();
    });
  }

  // --- Open Booking Form with Pre-filled Product ---
  window.openBookingWithProduct = function(productName) {
    const bookingSection = document.getElementById('dat-lich');
    const noteInput = document.getElementById('booking-note');
    if (noteInput && productName) {
      noteInput.value = `Tôi muốn đăng ký thử & thuê mẫu: ${productName}`;
    }
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // --- Booking Form Submission & Direct Routing ---
  const bookingForm = document.getElementById('booking-form');
  const toastMsg = document.getElementById('toast-msg');

  function showToast(message) {
    if (!toastMsg) return;
    toastMsg.querySelector('.toast-text').textContent = message;
    toastMsg.classList.add('show');
    setTimeout(() => {
      toastMsg.classList.remove('show');
    }, 4500);
  }

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('booking-name').value.trim();
      const phone = document.getElementById('booking-phone').value.trim();
      const date = document.getElementById('booking-date').value;
      const type = document.getElementById('booking-type').value;
      const method = document.getElementById('booking-method').value;
      const note = document.getElementById('booking-note').value.trim();

      if (!name || !phone) {
        alert('Vui lòng nhập đầy đủ họ tên và số điện thoại / Zalo để shop hỗ trợ bạn tốt nhất!');
        return;
      }

      // Generate prefilled text
      const orderSummary = `✨ ĐẶT LỊCH THỬ VÁY PERLA ELITE ✨
- Khách hàng: ${name}
- SĐT / Zalo: ${phone}
- Ngày cần trang phục: ${date || 'Chưa xác định'}
- Loại trang phục: ${type}
- Hình thức: ${method}
- Ghi chú / Mẫu quan tâm: ${note || 'Tư vấn theo số đo'}`;

      showToast(`Cảm ơn ${name}! Perla Elite đã tiếp nhận thông tin và đang mở kết nối Zalo/Messenger cho bạn.`);

      // Prompt choice or direct open Zalo
      setTimeout(() => {
        const encodedText = encodeURIComponent(orderSummary);
        const zaloUrl = `https://zalo.me/0812371611?text=${encodedText}`;
        window.open(zaloUrl, '_blank');
        bookingForm.reset();
      }, 1200);
    });
  }

  // --- Escape Key listener ---
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeDrawer();
    }
  });
});
