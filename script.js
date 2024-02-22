function changeLanguage(lang) {
        const elements = {
            'en': {
                'title': 'Ramadan Announcement',
                'announcement': 'As the blessed month of Ramadan approaches, we are delighted to announce that we will be conducting Tarawih prayers every night. During Tarawih, we will be completing one Juz\' of the Quran per night, with the goal of completing the entire Quran by the end of Ramadan, insha\'Allah.',
                'locationLabel': 'Location:',
                'scanLabel': 'Scan the QR code below to get the location:',
                'invitation': 'We invite you and your family to join us in these special prayers and spiritual gatherings. Let us come together as a community to seek the blessings and mercy of Allah during this sacred month.',
                'inviteLabel': 'Please feel free to invite your friends and family to join us. May Allah accept our prayers and grant us the strength to make the most of this blessed month.'
            },
            'ar': {
                'title': 'إعلان رمضان',
                'announcement': 'مع اقتراب شهر رمضان المبارك، نحن سعداء بالإعلان عن أننا سنقيم صلاة التراويح كل ليلة. خلال صلاة التراويح، سنكمل جزءًا واحدًا من القرآن كل ليلة، بهدف إكمال القرآن بأكمله بنهاية رمضان، إن شاء الله.',
                'locationLabel': 'الموقع:',
                'scanLabel': 'امسح الرمز الشريطي أدناه للحصول على الموقع:',
                'invitation': 'ندعوكم أنتم وعائلاتكم للانضمام إلينا في هذه الصلوات الخاصة والتجمعات الروحية. دعونا نجتمع كمجتمع لنطلب بركات ورحمة الله خلال هذا الشهر المبارك.',
                'inviteLabel': 'يرجى دعوة أصدقائك وعائلتك للانضمام إلينا. نسأل الله أن يقبل صلواتنا وأن يمنحنا القوة للاستفادة القصوى من هذا الشهر المبارك.'
            },
            'tr': {
                'title': 'Ramazan Duyurusu',
                'announcement': 'Bereketli Ramazan ayının yaklaştığı bu günlerde her gece Taravih namazlarını kılacağımızı duyurmaktan mutluluk duyuyoruz. Taravih namazı sırasında her gece bir Cüz\'ü tamamlayacak ve Ramazan\'ın sonuna kadar tüm Kur\'an\'ı tamamlamayı hedefliyoruz, inşallah.',
                'locationLabel': 'Konum:',
                'scanLabel': 'Konumu almak için aşağıdaki QR kodunu tarayın:',
                'invitation': 'Sizi ve ailenizi bu özel dualara ve manevi toplantılara katılmaya davet ediyoruz. Bu kutsal ayda Allah\'ın rahmetini ve bereketini aramak için bir araya gelelim.',
                'inviteLabel': 'Lütfen arkadaşlarınızı ve ailenizi davet etmekten çekinmeyin. Allah dualarımızı kabul etsin ve bize bu kutsal ayın en iyisini yapma gücünü versin.'
            },
            'fr': {
                'title': 'Annonce du Ramadan',
                'announcement': 'À l\'approche du mois béni du Ramadan, nous sommes ravis d\'annoncer que nous organiserons des prières de Tarawih chaque nuit. Pendant les Tarawih, nous compléterons un Juz\' du Coran par nuit, dans le but de compléter l\'ensemble du Coran d\'ici la fin du Ramadan, insha\'Allah.',
                'locationLabel': 'Emplacement:',
                'scanLabel': 'Scannez le code QR ci-dessous pour obtenir l\'emplacement :',
                'invitation': 'Nous vous invitons, vous et votre famille, à vous joindre à nous pour ces prières spéciales et ces rassemblements spirituels. Rassemblons-nous en tant que communauté pour rechercher les bénédictions et la miséricorde d\'Allah pendant ce mois sacré.',
                'inviteLabel': 'N\'hésitez pas à inviter vos amis et votre famille à se joindre à nous. Que Allah accepte nos prières et nous accorde la force de tirer le meilleur parti de ce mois béni.'
            },
            'ru': {
                'title': 'Объявление о Рамадане',
                'announcement': 'По мере приближения благословенного месяца Рамадан мы с радостью объявляем, что будем проводить ночные молитвы Таравих каждую ночь. Во время Таравих мы будем завершать одну джуза Корана каждую ночь, с целью завершить весь Коран к концу Рамадана, инша Аллах.',
                'locationLabel': 'Местоположение:',
                'scanLabel': 'Отсканируйте QR-код ниже, чтобы получить местоположение:',
                'invitation': 'Мы приглашаем вас и вашу семью присоединиться к нам на этих особых молитвах и духовных собраниях. Давайте объединимся вместе как сообщество, чтобы искать благословения и милость Аллаха во время этого святого месяца.',
                'inviteLabel': 'Пожалуйста, пригласите своих друзей и семью присоединиться к нам. Пусть Аллах примет наши молитвы и даст нам силы использовать этот благословенный месяц наилучшим образом.'
            },
            'ja': {
                'title': 'ラマダンのお知らせ',
                'announcement': '祝福されたラマダンの月が近づくにつれて、毎晩タラウィハの祈りを行うことを喜んでお知らせいたします。 タラウィハでは、ラマダンの終わりまでにコーランの1ジュズが毎晩完成する予定です。',
                'locationLabel': '場所:',
                'scanLabel': '場所を取得するには、以下のQRコードをスキャンしてください：',
                'invitation': 'この聖なる月にアッラーの祝福と慈悲を求めるために、特別な祈りと精神的な集まりに参加していただくよう、あなたとあなたの家族をお招きいたします。',
                'inviteLabel': 'お友達や家族をご招待ください。 アッラーが私たちの祈りを受け入れ、この祝福された月を最大限に活用する力を与えてくださいますように。'
            }
        };

        const selectedLang = elements[lang];
        document.getElementById('title').innerText = selectedLang.title;
        document.getElementById('announcement').innerText = selectedLang.announcement;
        document.getElementById('locationLabel').innerText = selectedLang.locationLabel;
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
