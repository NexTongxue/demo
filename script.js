// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 移动端菜单切换
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // 点击导航链接后关闭移动菜单
    const navLinkItems = document.querySelectorAll('.nav-link');
    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // 高德地图初始化
    function initMap() {
        // 检查AMap是否加载完成
        if (typeof AMap === 'undefined') {
            console.error('高德地图API加载失败');
            return;
        }

        // 创建地图实例
        const map = new AMap.Map('map-container', {
            zoom: 15, // 缩放级别
            center: [116.397470, 39.908823], // 默认坐标（北京）
            viewMode: '3D' // 使用3D视图
        });

        // 添加标记点
        const marker = new AMap.Marker({
            position: [116.397470, 39.908823], // 标记点坐标
            title: '智械科技'
        });
        map.add(marker);

        // 添加地图控件
        map.addControl(new AMap.ToolBar({
            position: 'RB'
        }));

        // 调整视野到标记点
        map.setFitView([marker]);
    }

    // 检查地图容器是否存在，如果存在则初始化地图
    const mapContainer = document.getElementById('map-container');
    if (mapContainer) {
        // 确保高德地图API加载完成
        if (typeof AMap !== 'undefined') {
            initMap();
        } else {
            // 如果AMap尚未加载，等待加载完成
            const checkMapLoaded = setInterval(function() {
                if (typeof AMap !== 'undefined') {
                    initMap();
                    clearInterval(checkMapLoaded);
                }
            }, 100);
        }
    }

    // 产品卡片悬停动画增强
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
        });
    });
});