window.__MOCK_DATA__ = {
    title: `DNLoveGift `,

    // Dòng chữ hiển thị lúc đang tải trang (Loading)
    loadingText: `Món quà đang đến trong giây lát...`,

    // Nhạc nền (Tải lên file MP3 tùy chọn, hoặc fallback sang CDN)
    music: `./assets/user_music.mp3` || "https://pub-b20e97fa235346679eb882246abe5bed.r2.dev/musics/thangcuoipiano.mp3",

    // Các câu chúc chạy vòng tròn xung quanh trái tim 3D
    messages: ["Chúc anh trung thu vui vẻ","Yêu anh nhiều"," Mong anh luôn hạnh phúc"],

    // Ảnh người yêu / kỉ niệm hiển thị bên trong trái tim 3D
    images: (["./assets/user_images_0.jpg"] && ["./assets/user_images_0.jpg"].length > 0 && ["./assets/user_images_0.jpg"][0]) ? ["./assets/user_images_0.jpg"] : ["./images/mid_autumn_moon_center.png"],

    // Nội dung bức thư hiện ra khi chạm vào phong bì
    letter: {
        title: `Gửi anh 😍`,
        body: `Trăng dưới nước là trăng trên trời, người trước mặt là người trong tim.
Cảm ơn vì anh đã đến, đã ở lại, và khiến em tin rằng tình yêu vẫn đẹp như trăng rằm đêm nay`,
        sender: `Yêu anh ❤`
    }
};
