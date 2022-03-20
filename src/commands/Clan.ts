import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed } from 'discord.js';
import type { CommandInteraction } from 'discord.js';
import { HTTPError, Util } from 'clashofclans.js';

export = {
    data: new SlashCommandBuilder()
        .setName('clan')
        .setDescription('Get the info of a clan')
        .addStringOption((option) => option.setName('tag').setDescription('The clan tag').setRequired(true)),

    async execute(interaction: CommandInteraction) {
        const clanTag = interaction.options.getString('tag');

        if (!Util.isValidTag(Util.formatTag(clanTag!))) {
            return interaction.reply({ content: `${clanTag} isn't a valid clan tag!`, ephemeral: true });
        }

        try {
            await interaction.deferReply();
            const clan = await interaction.client.coc.getClan(clanTag!);
            const embed = new MessageEmbed()
                .setTitle(`${clan.name}`)
                .setThumbnail(clan.badge.url)
                // https://clashofclans.js.org/docs/api/classes/Clan
                .addFields(
                    { name: 'Leader', value: clan.members.find((member) => member.role === 'leader')!.name, inline: true },
                    { name: 'Description', value: `${clan.description}`, inline: false },
                    { name: 'Members', value: `${clan.memberCount}`, inline: false },
                    { name: 'Location', value: `${clan.location?.name}`, inline: false },
                    { name: 'Trophies', value: `${clan.points}`, inline: false },
                    { name: 'Versus Trophies', value: `${clan.versusPoints}`, inline: false },
                    { name: 'Clan War League', value: `${clan.warLeague?.name}`, inline: false },
                    { name: 'Chat Language', value: `${clan.chatLanguage?.name}`, inline: false }
                )
                .setColor([0xe74c3c, 0x2980b9, 0x1abc9c, 0xe67e22, 0xf1c40f][Math.floor(Math.random() * 6)])
                .setURL(`https://link.clashofclans.com/en?action=OpenClanProfile&tag=${clan.tag.replace(/#/g, '')}`)
                .setTimestamp();
            await interaction.editReply({ embeds: [embed] });
        } catch (error) {
            if (error instanceof HTTPError && error.message === 'notFound') {
                await interaction.editReply({ content: `$Failed to find clan with ${clanTag}!` });
            } else {
                await interaction.editReply({ content: 'Something went wrong, try again!' });
            }
        }
    }
};