<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:image" content="https://i.hizliresim.com/l9701tb.png" />
    <title>Idle Resim Örneği</title>
    <style>
        /* Resmi ve idle durumunu temsil eden alan */
        .image-container {
            position: relative;
            width: 300px;
            height: 300px;
            background: url('https://i.hizliresim.com/l9701tb.png') no-repeat center/cover;
        }

        /* Idle efekti */
        .image-container::after {
            content: 'Loading...';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 10px 20px;
            border-radius: 10px;
            font-size: 18px;
            display: none; /* Başlangıçta görünmez */
        }

        /* Idle aktif olduğunda görünür yap */
        .idle .image-container::after {
            display: block;
        }
    </style>
</head>
<body>
    <!-- Resim alanı -->
    <div class="image-container"></div>

    <!-- Idle durumu aç/kapat butonu -->
    <button id="toggleIdle">Idle Durumunu Değiştir</button>

    <script>
        const imageContainer = document.querySelector('.image-container');
        const toggleButton = document.getElementById('toggleIdle');

        toggleButton.addEventListener('click', () => {
            imageContainer.classList.toggle('idle'); // Idle durumunu aç/kapat
        });
    </script>
</body>
</html>
