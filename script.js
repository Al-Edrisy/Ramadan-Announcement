function changeLanguage(lang) {
    const elements = {
        'en': {
            'title': 'Ramadan Announcement',
            'announcement': 'As the blessed month of Ramadan approaches, we are delighted to announce that we will be conducting Tarawih prayers every night. During Tarawih, we will be completing one Juz\' of the Quran per night, with the goal of completing the entire Quran by the end of Ramadan, insha\'Allah.',
            'locationLabel': 'Mosque Location:',
            'locationDetails': 'Insert Mosque Address Here',
            'scanLabel': 'Scan the QR code below to get the location:',
            'invitation': 'We invite you and your family to join us in these special prayers and spiritual gatherings. Let us come together as a community to seek the blessings and mercy of Allah during this sacred month.',
            'inviteLabel': 'Please feel free to invite your friends and family to join us. May Allah accept our prayers and grant us the strength to make the most of this blessed month.',
            'learnMore': 'Learn More'
        },
        'ar': {
            'title': 'إعلان رمضان',
            'announcement': 'مع اقتراب شهر رمضان المبارك، نحن سعداء بالإعلان عن أننا سنقيم صلاة التراويح كل ليلة. خلال صلاة التراويح، سنكمل جزءًا واحدًا من القرآن كل ليلة، بهدف إكمال القرآن بأكمله بنهاية رمضان، إن شاء الله.',
            'locationLabel': 'الموقع:',
            'locationDetails': 'Insert Mosque Address Here',
            'scanLabel': 'امسح الرمز الشريطي أدناه للحصول على الموقع:',
            'invitation': 'ندعوكم أنتم وعائلاتكم للانضمام إلينا في هذه الصلوات الخاصة والتجمعات الروحية. دعونا نجتمع كمجتمع لنطلب بركات ورحمة الله خلال هذا الشهر المبارك.',
            'inviteLabel': 'يرجى دعوة أصدقائك وعائلتك للانضمام إلينا. نسأل الله أن يقبل صلواتنا وأن يمنحنا القوة للاستفادة القصوى من هذا الشهر المبارك.',
            'learnMore': 'اعرف المزيد'
        },
        'tr': {
            'title': 'Ramazan Duyurusu',
            'announcement': 'Ramazan ayının yaklaşmasıyla birlikte her gece Tarawih namazları düzenleyeceğimizi duyurmaktan memnuniyet duyuyoruz. Tarawih sırasında her gece Kur\'an\'ın bir cüzünü tamamlayacağız ve Ramazan\'ın sonuna kadar tüm Kur\'an\'ı tamamlama hedefimiz bulunmaktadır, inşallah.',
            'locationLabel': 'Camii Konumu:',
            'locationDetails': 'Buraya Cami Adresi Ekle',
            'scanLabel': 'Konumu almak için aşağıdaki QR kodunu tarayın:',
            'invitation': 'Siz ve ailenizi bu özel dualara ve manevi toplantılara katılmaya davet ediyoruz. Toplum olarak Allah\'ın bu kutsal ayında rahmet ve bereketini aramak için bir araya gelelim.',
            'inviteLabel': 'Lütfen arkadaşlarınızı ve ailenizi katılmaya davet edin. Allah dualarımızı kabul etsin ve bize bu kutsal ayı en iyi şekilde değerlendirme gücü versin.',
            'learnMore': 'Daha Fazla Bilgi'
        },
        'fr': {
            'title': 'Annonce du Ramadan',
            'announcement': 'À l\'approche du mois béni du Ramadan, nous sommes ravis d\'annoncer que nous organiserons des prières de Tarawih chaque nuit. Pendant les Tarawih, nous compléterons un Juz\' du Coran par nuit, dans le but de terminer l\'ensemble du Coran d\'ici la fin du Ramadan, insha\'Allah.',
            'locationLabel': 'Emplacement de la Mosquée :',
            'locationDetails': 'Insérer l\'adresse de la mosquée ici',
            'scanLabel': 'Scannez le code QR ci-dessous pour obtenir l\'emplacement :',
            'invitation': 'Nous vous invitons, vous et votre famille, à vous joindre à nous pour ces prières spéciales et rassemblements spirituels. Rassemblons-nous en tant que communauté pour rechercher les bénédictions et la miséricorde d\'Allah pendant ce mois sacré.',
            'inviteLabel': 'N\'hésitez pas à inviter vos amis et votre famille à nous rejoindre. Que Allah accepte nos prières et nous accorde la force de profiter au maximum de ce mois béni.',
            'learnMore': 'En savoir plus'
        },
        'ru': {
            'title': 'Объявление о Рамадане',
            'announcement': 'По мере приближения благословенного месяца Рамадана, мы с радостью объявляем, что будем совершать ночные молитвы Таравих каждую ночь. Во время Таравих мы будем завершать один Джуз Корана каждую ночь, с целью завершить весь Коран к концу Рамадана, иншааллах.',
            'locationLabel': 'Местоположение мечети:',
            'locationDetails': 'Вставьте сюда адрес мечети',
            'scanLabel': 'Отсканируйте QR-код ниже, чтобы получить местоположение:',
            'invitation': 'Мы приглашаем вас и вашу семью присоединиться к нам на эти особые молитвы и духовные собрания. Давайте объединимся в качестве общины, чтобы искать благословения и милость Аллаха в этом священном месяце.',
            'inviteLabel': 'Не стесняйтесь приглашать ваших друзей и семью присоединиться к нам. Пусть Аллах примет наши молитвы и дарует нам силу максимально использовать этот благословенный месяц.',
            'learnMore': 'Узнать больше'
        },
        'ja': {
            'title': 'ラマダンのお知らせ',
            'announcement': 'ラマダンの祝福された月が近づくにつれて、私たちは毎晩Tarawihの祈りを行うことを喜んでお知らせいたします。 Tarawih中、私たちは毎晩クルアンの1ジュズを完了し、ラマダンの終わりまでに全クルアンを完成させることを目標にしています。',
            'locationLabel': 'モスクの場所：',
            'locationDetails': 'ここにモスクの住所を挿入してください',
            'scanLabel': '場所を取得するには、以下のQRコードをスキャンしてください：',
            'invitation': 'この特別な祈りと精神的な集まりに、あなたとあなたの家族をお招きします。 この神聖な月に、アッラーの祝福と慈悲を求めるために、私たちがコミュニティとして一緒になりましょう。',
            'inviteLabel': 'お友達やご家族をご招待いただくのも歓迎です。 アッラーが私たちの祈りを受け入れ、この祝福された月を最大限に活用する力を与えてくださいますように。',
            'learnMore': '詳細を見る'
        }
    };

    const selectedLang = elements[lang];
    document.getElementById('title').innerText = selectedLang.title;
    document.getElementById('announcement').innerText = selectedLang.announcement;
    document.getElementById('locationLabel').innerText = selectedLang.locationLabel;
    document.getElementById('locationDetails').innerText = selectedLang.locationDetails;
    document.getElementById('scanLabel').innerText = selectedLang.scanLabel;
    document.getElementById('invitation').innerText = selectedLang.invitation;
    document.getElementById('inviteLabel').innerText = selectedLang.inviteLabel;

    // Set direction based on language
    if (lang === 'ar') {
        document.querySelector('.container').style.direction = 'rtl';
    } else {
        document.querySelector('.container').style.direction = 'ltr';
    }

    // Activate button for selected language
    const buttons = document.querySelectorAll('.language-selector button');
    buttons.forEach(button => button.classList.remove('active'));
    document.querySelector(`.language-selector button[data-lang="${lang}"]`).classList.add('active');
}